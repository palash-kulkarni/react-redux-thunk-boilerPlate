import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comments from './comments'

export default class BlogDetails extends Component {

  constructor(props) {
    super(props);
    const { blog } = this.props.location.state;
    this.state = {
      name: blog.name,
      desc: blog.desc,
      image: blog.image,
      comments: blog.comments,
      like: false
    }
  
    this.likeProduct = this.likeProduct.bind(this);
  }

  likeProduct(event) {
    this.setState({ like: !this.state.like })
    event.preventDefault();
  }

  renderBlogDetails() {
    return (
      <div className="container-lg container-md container-sm">
        <div className="row text-center">
          <div className="col-lg-12 text-center">
            <h3>{this.state.name}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 border-top">
            <img className="card-img-top" src={this.state.image} alt="Card image cap" />
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 border-top border-primary">
            <p>{this.state.desc}</p>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <p>
              <a href="#" className="btn btn-info btn-sm" onClick={this.likeProduct}>
                <span className="glyphicon glyphicon-thumbs-up"></span>{ this.state.like ? 'Unlike' : 'Like' }
              </a>
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 text-center border-top border-primary"><strong>Comments</strong></div>
          <div className="col-lg-3"></div>
        </div>
        <Comments comments={this.state.comments} />
      </div>
    )
   }

  render() {
    return (
      this.renderBlogDetails()
    )
  }
}
