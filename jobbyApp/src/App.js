import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home/index'
import JobsPage from './components/JobsPage/index'
import JobDetailsPage from './components/JobDetailsPage/index'

import LoginPage from './components/LoginPage/index'
import NotFound from './components/NotFound/index'

import ProtectedRoute from './components/ProtectedRoute/index'
// import Header from './components/Header/index'
// import Header from './components/Header/index'
// import Header from './components/Header/index'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/jobs"
        component={() => (
          <JobsPage
            employmentTypesList={employmentTypesList}
            salaryRangesList={salaryRangesList}
          />
        )}
      />
      <ProtectedRoute exact path="/jobs/:id" component={JobDetailsPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-Found" />
    </Switch>
  </>
)

export default App
