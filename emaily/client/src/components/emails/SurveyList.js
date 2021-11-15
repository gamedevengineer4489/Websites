import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey, fetchSurveysByTitle, fetchSurveysBySentDate, fetchSurveysByNo, fetchSurveysByYes } from '../../actions';


class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (

        <div className="card medium teal" key={survey._id}>
          <div className="card-content ">
            <span className="card-title" style = {{ fontSize: 'xx-large'}}><b>{survey.title}</b></span>
            <p style = {{ fontSize: 'large'}}>
              <b>Body: </b>{survey.body}
            </p>
            <p style = {{ fontSize: 'large'}}>
              <b>Sent On:</b> {new Date(survey.dateSent).toLocaleDateString() === "Invalid Date" ? "No responses have been received" : new Date(survey.dateSent).toLocaleDateString()},
              <br />
              <b>Sent From:</b> {survey.from}
              <br />
              <b>Last Responded:</b> {new Date(survey.lastResponded).toLocaleDateString() === "Invalid Date" ? "No responses received" : new Date(survey.lastResponded).toLocaleDateString() }
              {new Date(survey.lastResponded).toLocaleDateString() === "Invalid Date" ? console.log("No responses have been received") : console.log(new Date(survey.lastResponded).toLocaleDateString())}
            </p>
          </div>
          
          <div className = "card-action">
            <b style = {{ fontSize: 'large' }}>Survey Results</b>
            <br />
            <a style = {{ fontSize: 'large' }}><b>Yes:</b> {survey.yes}</a>
            <a style = {{ fontSize: 'large' }}><b>No:</b> {survey.no}</a>
            <br />
            <a className = "btn red" onClick = {() => this.props.deleteSurvey(survey._id)} href = "/surveys">Delete Survey</a>
          </div>
        </div>
      );
    });
  }

    renderSurveysByDateSent() {
      // Need to do something like this with the mongoDB survey data.
      if(this.props.surveys.length > 0)
      {
        let array = this.props.surveys.sort((a, b) => (a.dateSent > b.dateSent) ? 1 : -1);
        console.log(array);
      }
      
    }

  

  render() {
    return (
      <div>
        <br />
        <button className = "btn " onClick = {() => this.props.fetchSurveysByTitle()} style = {{ backgroundColor: 'dodgerblue'}}>Sort By Title</button>
        <span>{' '}</span>
        <button className = "btn" onClick = {() => this.props.fetchSurveysBySentDate()} style = {{ backgroundColor: 'mediumseagreen'}}>Sort By Sent Date</button>
        <span>{' '}</span>
        <button className = "btn" onClick = {() => this.props.fetchSurveysByNo()} style = {{ backgroundColor: 'violet'}}>Sort By No</button>
        <span>{' '}</span>
        <button className = "btn" onClick = {() => this.props.fetchSurveysByYes()} style = {{ backgroundColor: 'gray'}}>Sort By Yes</button>
        {this.renderSurveys()}
      </div>
    );
  }
}


function mapStateToProps({ surveys }) {
  return { surveys };
}
// Comment
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey, fetchSurveysByTitle, fetchSurveysBySentDate, fetchSurveysByNo, fetchSurveysByYes })(SurveyList);