import Ember from 'ember';

export function strDasherize([str]) {
  return str.dasherize();
}

export default Ember.Helper.helper(strDasherize);
