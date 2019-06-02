import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'

const TextFieldGroup = ({field, value, label, error, type, onChange, checkUsersExists}) => {
  return (
    <div className={classname('form-group', {'has-error': error})}>
      <label htmlFor="" className="control-label">{label}</label>
      <input
        value={value}
        onBlur={checkUsersExists}
        onChange={onChange}
        type={type}
        name={field}
        className="form-control"
      />
      {error && <span className="help-block">{error.join(', ')}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.array,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUsersExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup