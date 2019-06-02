import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import { login } from '../../actions/loginActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class LoginPage extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired
  }

  state = {
    credentials: {
      username: '',
      password: ''
    },
    errors: {},
    isLoading: false
  }

  onChange = (e) => {
    let credentials = this.state.credentials
    credentials[e.target.name] = e.target.value
    this.setState({credentials}
    )
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.setState({isLoading: true, errors: {}})

    this.props.login(this.state.credentials)
      .then(
        res => this.props.history.push('/'),
        ({data}) => this.setState({errors: data.errors})
      )
      .finally(() => {
        this.setState({isLoading: false})
      })
  }

  render () {
    return (
      <div>
        <LoginForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state.credentials}
          isLoading={this.state.isLoading}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

export default withRouter(
  connect(null, {
    login
  })(LoginPage)
)