import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import _ from 'lodash';
import formFields from './formFields';
import { connect } from 'react-redux';

const SurveyEditReview = ({ onCancel, formValues, submitEdit, history, id }) => {;
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>

      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <a
        onClick={() => submitEdit(formValues, id, history)}
        className="green btn-flat right white-text"
        href = "/surveys"
      >
        Edit Survey
        <i className="material-icons right">email</i>
      </a>
      
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyEditReview));