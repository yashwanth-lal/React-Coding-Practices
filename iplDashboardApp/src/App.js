import './App.css'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home/index'
import NotFound from './components/NotFound/index'
import TeamMatches from './components/TeamMatches/index'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />

      <Route path="/bad-path" component={NotFound} />
    </Switch>
  </>
)

export default App
