import Ember from 'ember';

export default Ember.Route.extend({
  selectedBusiness: null,

  model() {
    return this.store.findAll('business');
  },

  floorBuySuccess(floor) {
    debugger;
  },

  floorBuyFailure(response) {
    debugger;
  },

  actions: {
    goBack() {
      this.transitionTo('game.index');
    },

    selectBusiness(business) {
      this.set('selectedBusiness', business);
    },

    buyFloor() {
      var selectedBusiness = this.get('selectedBusiness');

      if (!selectedBusiness) {
        alert('You need to pick a business scrub.');
        return;
      }

      var floor = this.store.createRecord('floor', {business: selectedBusiness, floor: 1});

      floor.save().then(this.floorBuySuccess.bind(this), this.floorBuyFailure.bind(this));
    }
  },
});
