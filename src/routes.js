import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Dash from './components/Dash/Dash'
import Teacher from './components/Teacher/Teacher'
import Applicant from './components/Applicant/Applicant'
import Registrator from './components/Registrator/Registrator'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/dash' component={Dash} />
    <Route path='/register' component={Registrator} />
    <Route path='/teacher' component={Teacher} />
    <Route path='/student' component={Applicant} />
  </Switch>
)