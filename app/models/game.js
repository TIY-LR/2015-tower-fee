import DS from 'ember-data';

export default DS.Model.extend({
  totalMoney: DS.attr(),
  totalResidents: DS.attr(),
  capacity: DS.attr(),
  availableEmployees: DS.attr(),

});
