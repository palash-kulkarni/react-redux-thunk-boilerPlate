import { connect } from 'react-redux'
import fetch from 'cross-fetch'

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
import BLOGS from '../dummy_data/blogs'

function requestBlogs() {
  return {
    type: REQUEST_BLOGS,
    blogs: []
  }
}

function receiveBlogs(json) {
  return {
    type: RECEIVE_BLOGS,
    blogs: json.map(child => child),
    receivedAt: Date.now()
  }
}

function fetchBlogs() {
  return dispatch => {
    dispatch(requestBlogs())
    // return fetch(`API_URL`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveBlogs(json)))

    // NOTE : Here using dummy data, replace below statement with above API call
    return dispatch(receiveBlogs(BLOGS))
  }
}

export function fetchBlogsIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchBlogs())
  }
}
