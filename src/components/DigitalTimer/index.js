// Write your code here
// Write your code here

import {Component} from 'react'

export default class DigitalTimer extends Component {
  state = {isImage: false, setTimer: 25, time: 0}

  updateTime = () => {
    this.setState(prev => ({time: prev.time - 1}))
  }

  onStart = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isImage: true})
  }

  onStop = () => {
    clearInterval(this.timerId)
    this.setState({isImage: false})
  }

  onReset = () => {
    this.setState({time: 0, isImage: false,setTimer:25})
    clearInterval(this.timerId)
  }

  onDecrement = () => {
    this.setState(prev => ({setTimer: prev.setTimer - 1}))
  }

  onIncrement = () => {
    this.setState(prev => ({setTimer: prev.setTimer + 1}))
  }

  secondsFormat = () => {
    const {time} = this.state
    const seconds = 60 + (time % 60)
    if (seconds === 60) {
      return `00`
    }
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  minutesFormat = () => {
    const {time, setTimer} = this.state
    const minutes = setTimer + Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isImage, setTimer, time} = this.state
    const formatedTime = `${this.minutesFormat()}:${this.secondsFormat()}`
    return (
      <div>
        <h1>Digital Timer</h1>
        <div>
          <h1>{formatedTime}</h1>
          <p>{isImage ? 'Running' : 'Paused'}</p>
        </div>
        <div>
          <button type="button" onClick={isImage ? this.onStop : this.onStart}>
            <img
              src={
                isImage
                  ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
              }
              alt={isImage ? 'pause icon' : 'play icon'}
            />
            <p>{isImage ? 'Pause' : 'Start'}</p>
          </button>
          <button type="button" onClick={this.onReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt=" reset icon"
            />
            <p>Reset</p>
          </button>
        </div>
        <p>Set Timer Limit</p>
        <div>
          <button type="button" onClick={this.onDecrement} disabled={isImage}>
            -
          </button>
          <p>{setTimer}</p>
          <button type="button" onClick={this.onIncrement} disabled={isImage}>
            +
          </button>
        </div>
      </div>
    )
  }
}
