var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
     it('should set state to started and timer', (done) => {
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleSetTimer(0);

       expect(timer.state.count).toBe(0);
       expect(timer.state.controlsStatus).toBe('started');

       setTimeout(() => {
         expect(timer.state.count).toBe(1);
         done();
       }, 1001)
     });

     it('should pause countdown on paused status', (done) => {
       var timer = TestUtils.renderIntoDocument(<Timer/>);
       timer.handleSetTimer(3);
       timer.handleStatusChange('paused');

       setTimeout(() => {
         expect(timer.state.count).toBe(3);
         expect(timer.state.controlsStatus).toBe('paused');
         done();
       }, 3001);
     });

  });
});
