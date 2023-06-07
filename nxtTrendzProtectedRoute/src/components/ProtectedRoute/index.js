// Write your JS code here
import {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class ProtectedRoute extends Component {
  render() {
    const {exact, path, component} = this.props
    console.log(path)
    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }
    return <Route exact={exact} path={path} component={component} />
  }
}
export default ProtectedRoute
