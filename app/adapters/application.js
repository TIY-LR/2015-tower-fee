import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://irontower.azurewebsites.net',
  namespace: 'api',
});
