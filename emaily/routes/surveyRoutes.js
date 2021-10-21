const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');



module.exports = (app) => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });

  app.get('/api/surveys/sortByTitle', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).sort({ "title": -1 });
    console.log(surveys);
    res.send(surveys);
  });

  app.get('/api/surveys/sortByDateSent', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).sort({ "dateSent": -1 });
    console.log(surveys);
    res.send(surveys);
  });

  app.get('/api/surveys/sortByYes', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).sort({ "yes": -1 });
    console.log(surveys);
    res.send(surveys);
  });

  app.get('/api/surveys/sortByNo', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).sort({ "no": -1 });
    console.log(surveys);
    res.send(surveys);
  });

  app.delete('/api/surveys/:surveyId', (req, res) => {
    Survey.findOneAndDelete(
      {
        _id: req.params.surveyId
      }
    ).exec();
    
    res.send({});
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  app.patch('/api/surveys/:surveyId', requireLogin, requireCredits, async(req, res) => {
    console.log(req.user);
    const { surveyId } = req.params;
    const { title, subject, body, recipients } = req.body;
    Survey.updateOne(
      {
        _id: surveyId,
        
      },
      {
       
        $set: { 'title': title, 'subject': subject, 'body': body, 'recipients': recipients.split(',').map((email) => ({ email: email.trim() })) },
        
      }
    ).exec();

    res.send({});
  });



  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients, from, sendGridKey } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
      from: from,
      sendGridKey: sendGridKey
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};






