import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    message: '',
    isDisabled: Ember.computed.not('isValid'),
    isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
    isValidEmail: Ember.computed.match('model.email', /^.+@.+\..+$/),
    isValidMessage: Ember.computed.match('model.message', /^[a-zA-z0-9 \.,?!]{5,}/),
});
