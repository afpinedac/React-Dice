import React, { Component } from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import classname from 'classnames'
import TextFieldGroup from '../common/TextFieldGroup'
import { withRouter } from 'react-router-dom'

class SignupForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    this.setState({errors: {}, isLoading: true})
    console.log(this.state)
    this.props.userSignupRequest(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'You have signed up!'
        })
        this.props.history.push('/')
      }, ({response}) => {
        this.setState({errors: response.data, isLoading: false})
      })
  }

  render () {

    const options = map(timezones, (v, k) =>
      <option key={v} value={v}>{k}</option>
    )

    const {errors} = this.state

    return (
      <form onSubmit={this.onSubmit} className="form">
        <h1>Join our community</h1>
        <TextFieldGroup
          onChange={this.onChange}
          error={errors.username}
          field="username"
          value={this.state.username}
          label="Username"
        />
        <div className={classname('form-group', {'has-error': errors.email})}>
          <label htmlFor="" className="control-label">E-mail</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
          {errors.email && <span className="help-block">{errors.email[0]}</span>}
        </div>
        <div className={classname('form-group', {'has-error': errors.password})}>
          <label htmlFor="" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
          {errors.password && <span className="help-block">{errors.password[0]}</span>}
        </div>
        <div className={classname('form-group', {'has-error': errors.password_confirmation})}>
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <input
            value={this.state.password_confirmation}
            onChange={this.onChange}
            type="password"
            name="password_confirmation"
            className="form-control"
          />
          {errors.password_confirmation && <span className="help-block">{errors.password_confirmation[0]}</span>}
        </div>
        <div className={classname('form-group', {'has-error': errors.timezone})}>
          <label htmlFor="" className="control-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled> - Choose -</option>
            {options}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone[0]}</span>}
        </div>
        <div className="form-group">
          <button  className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}


export default withRouter(SignupForm)