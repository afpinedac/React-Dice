import React from 'react'
import TextFieldGroup from '../../common/TextFieldGroup'
import classname from 'classnames'
import PropTypes from 'prop-types'

function LoginForm (
  {
    values,
    onSubmit,
    onChange,
    isLoading
  }
) {

  return (
    <form onSubmit={onSubmit} className="form">
      <h1>Join our community</h1>
      <TextFieldGroup
        onChange={onChange}
        field="username"
        value={values.username}
        label="Username"
      />
      <TextFieldGroup
        onChange={onChange}
        field="password"
        value={values.password}
        label="Password"
        type="password"
      />
      <div className="form-group">
        <button className="btn btn-primary btn-lg" disabled={isLoading}>
          Log in
        </button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  values: PropTypes.object.required,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default LoginForm

