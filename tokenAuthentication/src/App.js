import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Web3 from 'web3'
import Navbar from './components/app/Navbar'
import Home from './components/app/Home'
import VideoVault from './components/app/VideoVault'
import Settings from './components/app/Settings'
import {
  loadWeb3,
  loadAccount
} from './store/interactions'


class App extends Component {
  componentWillMount() {
    this.runSetup(this.props.dispatch)
  }

  async runSetup(dispatch) {
    // Detect Metamask
    if(typeof web3 !== 'undefined') {
      // Continue execution...
      const web3 = await loadWeb3(dispatch)
      const account = await loadAccount(web3, dispatch)
      this.checkAuthorization(account)
    } else {
      window.alert('Please Install Metamask!')
      // TODO: Don't show any page content here...
    }
  }

  async checkAuthorization(account) {
    // TODO: Check against actual token holders
    const tokenHolders = [
      "0xAE2f34aEead72Bfd46138A4E662FE284F9a4DB43",
      "0x1E2418fe04D20cD7eE6A91A3AD1d299fa8c9e20c",
      "0x8A97d72B4c823d96f18d76bA668e2a5CDcAC95Af",
      "0x719C632328eB541183F34C5c616ac359E828ec21",
      "0x33a75943Ca7Ed31C66199FE851AeaF0A758837E3"
    ]
    const authorized = tokenHolders.includes(account)
    if(authorized) {
      // TODO: Show website content
      window.alert("You're authorized!!! :)")
    } else {
      // TODO: Show "Please login" content (unauthorized)
      window.alert("You're not authorized... :(")
    }
  }

  render() {
    const {
      account,
    } = this.props;

    return (
      <BrowserRouter>
        <div className="app">
          <Navbar {...this.props} />
          <div id="content">
            <Switch>
              <Route
                path='/settings'
                render={(props) => (
                  <Settings account={account} /> : null
                )}
              />
              <Route
                path='/videos'
                render={(props) => (
                  <VideoVault account={account} /> : null
                )}
              />
              <Route
                path='/'
                render={(props) => (
                  <Home {...props} /> : null
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  }
}

export default connect(mapStateToProps)(App);
