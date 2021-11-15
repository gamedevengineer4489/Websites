import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyEditReview from './SurveyEditReview';


class SurveyEdit extends Component {
  state = { showEditReview: false };


  renderContent() {
    if (this.state.showEditReview) {
      return (
        <SurveyEditReview
          onCancel={() => this.setState({ showEditReview: false })}
          id = {this.props.match.params.id}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showEditReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        
          {console.log(this.props.match.params.id)}
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyEdit);
// Let's deploy this to production with changes again