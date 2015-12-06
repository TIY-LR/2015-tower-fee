import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.queryRecord('game', {latest: true});
  },

  afterModel() {
    window.setInterval(() => {
      this.store.queryRecord('game', {latest: true});
    }, 1000);
  },
});
