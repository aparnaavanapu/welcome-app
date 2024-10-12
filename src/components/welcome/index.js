import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  subscribe = () => {
    this.setState({isSubscribed: true})
  }

  unSubscribe = () => {
    this.setState({isSubscribed: false})
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="btn" onClick={this.unSubscribe}>
            Subscribed
          </button>
        ) : (
          <button className="btn" onClick={this.subscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
