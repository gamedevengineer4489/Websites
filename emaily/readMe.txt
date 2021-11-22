Note: To access the production version of this application, visit https://protected-ocean-66873.herokuapp.com/

This application allows people to send surveys out to emails they speify. The webiste requires users to create a Sendgrid account and obtain a Sendgrid API key. They also have to do some initial setup before using this website. 
Once on the website,the user has to verify a single sender under Sender Authentication under Settings. The from email is the one that has to be specified for each new survey created. Under Mail Settings, enable Event Webhook with an HTTP Post URL of https://limitless-citadel-63953.herokuapp.com/api/surveys/webhooks and then leave everything else blank except Engagement Data. Under Engagement Data make sure Clicked is selected.
This set-up is explained on the home page of the website. 

