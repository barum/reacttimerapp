var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      counddownStatus: 'stopped'
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.counddownStatus !== prevState.counddownStatus) {
      switch (this.state.counddownStatus) {
        case 'started':
          this.startTimer();
          break;
        default:

      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count -1;
      this.setState ({
        count: newCount >= 0 ?newCount : 0
      });
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      counddownStatus: 'started'
    });
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
