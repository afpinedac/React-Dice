import React, { Component } from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import PropTypes from 'prop-types'

class SignupForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(this.state)
    this.props.userSignupRequest(this.state)
  }

  render () {

    const options = map(timezones, (v, k) =>
      <option key={v} value={v}>{k}</option>
    )

    return (
      <form onSubmit={this.onSubmit} className="form">
        <h1>Join our community</h1>
        <div className="form-group">
          <label htmlFor="" className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">E-mail</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <input
            value={this.state.password_confirmation}
            onChange={this.onChange}
            type="password"
            name="password_confirmation"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled> - Choose -</option>
            {options}
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm