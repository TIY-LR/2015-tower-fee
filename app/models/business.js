import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  cost: DS.attr(),
  earningsPerMinute: DS.attr(),
  numberOfPeopleNeeded: DS.attr(),
  rateOfPopulation: DS.attr(),

});
