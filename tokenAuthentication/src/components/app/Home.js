import React, { Component } from 'react';
import { connect } from 'react-redux'
import WelcomeVideo from './WelcomeVideo'

const styles = {
  content: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px'
  }
}


class Home extends Component {
  async componentWillMount() {
    const { dispatch } = this.props
    await this.loadBlockchainData(dispatch)
  }

  async loadBlockchainData(dispatch) {
    // TODO: Wire up blockchain connection
  }

  render() {
    return(
      <div style={styles.content}>
        <h1 style={styles.heading}>Welcome to Blockchain Mastery University!</h1>
        <WelcomeVideo />
        <p><i>Please complete the following steps to finalize your registration:</i></p>
        <h3>✅ Watch the orientation video above.</h3>
        <h3>✅ Fill out your <a href="https://forms.gle/6pWgQeg4AdBh9Xmm7" target="_blank">registration form</a>.</h3>
        <h3>✅ Introduce yourself to <a href="https://app.slack.com/client/TSZTFRNLV/CSZT3U5UG" target="_blank">the community</a>.</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  };
}

export default connect(mapStateToProps)(Home);
