import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      game: this.store.queryRecord('game', {latest: true}),
      floors: this.store.findAll('floor'),
    });
  },

  afterModel() {
    window.setInterval(() => {
      this.store.queryRecord('game', {latest: true});
    }, 60000);
  },
});
