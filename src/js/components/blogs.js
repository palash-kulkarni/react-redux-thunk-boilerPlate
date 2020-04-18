import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Blogs extends Component {

  renderBlogsData() {
    return this.props.blogs.map((blog, index) => {
      return (
        <div className="card bg-light mb-3 mx-auto" style={{ width: '18rem' }} key={index}>
          <img className="card-img-top" src={blog.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{blog.name}</h5>
            <p className="card-text"></p>
            <Link to={{
              pathname: `/blogs/${blog.id}`,
              state: {
                blog: blog
              }
            }}>
              <button type="button" className="btn btn-primary">Edit</button>
            </Link>
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