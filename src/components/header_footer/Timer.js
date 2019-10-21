import React, { Component } from 'react';
import '../../resources/styles.css';
import Slide from 'react-reveal/Slide';
class Timer extends Component {
  state = {
    deadline: 'Oct, 24, 2019',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  getTime = deadline => {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
    if (time < 0) console.log('date passed');
    else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor(((time / 1000) * 60 * 60) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        seconds,
        minutes,
        hours,
        days
      });
    }
  };
  componentDidMount() {
    setInterval(() => this.getTime(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
export default Timer;
