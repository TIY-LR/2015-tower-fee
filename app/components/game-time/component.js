import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  gameTime: {
    month: 0,
    date: 0,
    year: 0,
    minutes: 0,
    hours: 0,
  },

  gameSpeed: 60 * 24,

  updateGameTime() {
    var startTime = this.getAttr('startTime');
    var currentTime = moment();
    var timeDiff = currentTime.diff(startTime);
    var gameDiff = timeDiff * this.get('gameSpeed');
    var gameTime = moment(startTime).add(gameDiff, 'ms');

    var gameAttrs = {
      month: gameTime.month() + 1,
      date: gameTime.date(),
      year: gameTime.year(),
      minutes: gameTime.minutes(),
      hours: gameTime.hours(),
    };

    this.set('gameTime', gameAttrs);
  },

  initializeTime: Ember.on('didReceiveAttrs', function() {
    window.setInterval(this.updateGameTime.bind(this), 30);
  }),
});
