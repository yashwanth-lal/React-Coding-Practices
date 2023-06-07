import Cookie from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'
// import Home from '../Home/index'
// import JobsPage from '../JobsPage/index'

import './index.css'

const ProtectedRoute = props => {
  console.log('props')

  console.log(props)

  //   console.log(typeof component.name)

  if (Cookie.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
