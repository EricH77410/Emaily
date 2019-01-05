import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'

const Dashboard = () => <h2>DASHBOARD</h2>
const Survey = () => <h2>SURVEY New</h2>


class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={Survey} />
          </div>
        </BrowserRouter>
      </div>
    )
  }  
}



export default connect(null, actions)(App)