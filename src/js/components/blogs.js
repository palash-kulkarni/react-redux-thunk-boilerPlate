import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Blogs extends Component {

  renderBlogsData() {
    return this.props.blogs.map((blog, index) => {
      return (
        <div className="card bg-light mb-3 mx-auto" style={{ width: '18rem' }} key={index}>
          <img className="card-img-top" src={blog.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{blog.name}</h5>
            <p className="card-text">{blog.desc}</p>
            <a href="#" className="btn btn-primary">Edit</a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      this.renderBlogsData()
    )
  }
}

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired
}