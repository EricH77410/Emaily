import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom'

import FIELDS from './formFields'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(FIELDS, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>
          { formValues[field.name] }
        </div>
      </div>
    )
  })

  return (
    <div>
      <h5>Form Review</h5>
      <div>
        { reviewFields }
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={ onCancel }
      >
        Back
      </button>
      <button 
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

function mapStateToProps(state){
  return { formValues: state.form.surveyForm.values  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))