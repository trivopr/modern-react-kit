import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './contact-form.scss';
import {validate} from '../../utils/validate';


const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


// Select Option
const colors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]
const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

let ContactForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

    return (
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
          />
          <Field name="email" type="email" component={renderField} label="Email" />
          <Field name="age" type="number" component={renderField} label="Age" />
          <Field name="company" type="text" component={renderField} label="Company" />

          <div>
            <label>Sex</label>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
              <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
              <Field name="sex" component={renderError}/>
            </div>
          </div>      

          <div>
            <label>Favorite Color</label>
            <Field name="favoriteColor" component={renderColorSelector}/>
          </div>      

          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
      </form>
    </div>
    )
}

ContactForm = reduxForm({
    form: 'contact',
    validate,
    warn
})(ContactForm)

export default ContactForm;