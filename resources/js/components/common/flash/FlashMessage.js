import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class FlashMessage extends Component {

  constructor (props) {
    super(props)
  }

  render () {

    const {message, deleteFlashMessage} = this.props

    return (
      <div className={classnames('alert', {
        'alert-success': message.type == 'success',
        'alert-danger': message.type == 'error'
      })}>
        <button onClick={event => { deleteFlashMessage(message.id) }} className="close"><span>&times;</span></button>
        {message.text}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage