import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './scss/style.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Map from './components/Map'
import SchoolsShow from './components/SchoolsShow'
import SchoolsIndex from './components/SchoolsIndex'
import Home from './components/Home'
import Navbar from './components/common/Navbar'


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <main>

          <Navbar />

          <Switch>

            <Route path="/schools/:id" component={SchoolsShow} />
            <Route exact path ="/schools" component={SchoolsIndex} />
            <Route path="/" component={Home} />

          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
