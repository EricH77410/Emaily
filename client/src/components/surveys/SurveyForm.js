// SurveyForm shows a form for a user to add input
import React from 'react';
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

import FIELDS from './formFields'


class SurveyForm extends React.Component {

  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
    })
  }

  render(){
    return (
      <div> 
        <form onSubmit={this.props.handleSubmit( this.props.onSurveySubmit )}>

          { this.renderFields() }

          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button className="teal btn-flat white-text right" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        
        </form>
        
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '')

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value for this field'
    }
  })  

  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)