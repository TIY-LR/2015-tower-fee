import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    Ember.$.ajax({
      url: 'http://irontower.azurewebsites.net/api/games',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',

      data: JSON.stringify({
        game: {
          player: 'New Player',
          totalMoney: 5000,
          populationCheckRate: 20,
        },
      }),
    }).then(() => {
      return this.transitionTo('game.index').then(() => {
        location.reload();
      });
    });
  },
});
