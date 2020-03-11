import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>&nbsp;&nbsp;
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
      </div>
      <div>
        <label>Last Name</label>&nbsp;&nbsp;
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
      </div>
      <div>
        <label>Email</label>&nbsp;&nbsp;
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
      </div>
      <div>
        <label>Sex</label>&nbsp;&nbsp;
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
      </div>
      <div>
        <label>Favorite Color</label>&nbsp;&nbsp;
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>&nbsp;&nbsp;
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      <div>
        <label>Notes</label>&nbsp;&nbsp;
          <Field name="notes" component="textarea" />
      </div>
      <div>
        <br/>
        <br/>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' 
})(SimpleForm)