var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    //var strSeconds = this.refs.seconds.value;
    var strSeconds = 0;

    this.props.onSetTimer(parseInt(strSeconds, 10));

    // if (strSeconds.match(/^[0-9]*$/)) {
    //   this.refs.seconds.value = '';
    //   this.props.onSetCountdown(parseInt(strSeconds, 10));
    // }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TimerForm;
