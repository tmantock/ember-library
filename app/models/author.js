import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { inverse: 'author' }),
  isNotValid: Ember.computed.empty('name')
});
