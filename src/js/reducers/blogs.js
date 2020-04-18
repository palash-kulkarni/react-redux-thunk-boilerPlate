const blogs = (state = { items: [], isFetching: true }, action) => {
  switch (action.type) {
    case 'REQUEST_BLOGS':
      return Object.assign({}, state, { isFetching: true, 
                                        items: action.blogs })
    case 'RECEIVE_BLOGS':
      return Object.assign({}, state, { isFetching: false, 
                                        items: action.blogs })
    default:
      return state
  }
}

export default blogs