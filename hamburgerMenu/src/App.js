import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'

const App = () => (
  <>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
