import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBlogsIfNeeded } from '../actions'
import { Route } from 'react-router-dom'
import Blogs from '../components/blogs'
import BlogDetails from '../components/blogDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/main.scss';

class AsyncApp extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBlogsIfNeeded())
  }

  render() {
    const { blogs, isFetching } = this.props
    
    return (
      <div className="container-lg container-md container-sm">
        {isFetching && blogs.length === 0 && <h2>Loading...</h2>}
        {!isFetching && blogs.length === 0 && <h2>Empty.</h2>}
        {blogs.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Route exact={true} path="/" render={() => (
              <div className="container-lg container-md container-sm">
                <div className="row">
                  <div className="col-lg-12 text-center"><h1>Blogs</h1></div>
                </div>
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6 text-center">
                    <Blogs blogs={blogs} />
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            )}/>
            <Route path="/blogs/:id" render={(props) => <BlogDetails {...props} />} />
          </div>
        )}
      </div>
    )
  }
}

AsyncApp.propTypes = {
  blogs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

  const { isFetching, items: blogs } = {
    isFetching: true,
    items: state.blogs.items
  }

  return {
    blogs,
    isFetching: true
  }
}

export default connect(mapStateToProps)(AsyncApp)