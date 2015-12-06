import Ember from 'ember';

export function padZero([time]/*, hash*/) {
  if (time < 10) {
    return '0' + time;
  }

  return time;
}

export default Ember.Helper.helper(padZero);
