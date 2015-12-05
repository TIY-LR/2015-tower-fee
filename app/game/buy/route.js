import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 1,
        business: 'Apartment',
        cost: '$2,000',
        needed: 0,
        earnings: 0,
      },
      {
        id: 2,
        business: 'Coffee Shop',
        cost: '$2,000',
        needed: 3,
        earnings: '$1,000',
      },
      {
        id: 3,
        business: 'Music Studio',
        cost: '$4,000',
        needed: 3,
        earnings: '$2,000',
      },
    ];
  },

  actions: {
    goBack() {
      this.transitionTo('game.index');
    },
  },
});
