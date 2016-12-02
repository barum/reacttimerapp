var React = require('react');
var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      controlsStatus: 'stopped'
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.controlsStatus !== prevState.controlsStatus) {
      switch (this.state.controlsStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer= undefined;
  },
  startTimer: function () {

    this.timer = setInterval(() => {

      this.setState ({
        count: this.state.count +1
      });

    }, 1000);
  },
  handleSetTimer: function (seconds) {
    this.setState({
      count: seconds,
      controlsStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({controlsStatus: newStatus});
  },
  render: function () {
    var {count, controlsStatus} = this.state;
    var renderControlArea = () => {
      if (controlsStatus !== 'stopped') {
        return <Controls controlsStatus={controlsStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <TimerForm onSetTimer={this.handleSetTimer}/>;
      }
    };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
