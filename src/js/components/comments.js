import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comments extends Component {

  renderComments() {
    return this.props.comments.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-lg-3"></div>
          <div className="col-lg-6"><span>{comment.user}</span> : {comment.text}</div>
          <div className="col-lg-3"></div>
        </div>
      )
    })
  }

  render() {
    return (
      this.renderComments()
    )
  }
}

