import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('date'),
  library: DS.belongsTo('library'),
  author: DS.belongsTo('author'),
  isNotValid: Ember.computed.empty('title')
});
