// Write your JS code here
import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

class ProtectedRoute extends Component {
  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return <Route {...this.props} />
  }
}
export default ProtectedRoute
