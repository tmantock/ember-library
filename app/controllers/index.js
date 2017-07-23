import Ember from 'ember';

export default Ember.Controller.extend({
    headerMessage: 'Coming Soon',
    emailAddress: '',

    isDisabled: Ember.computed.not('isValid'),
    isValid: Ember.computed.match('model.email', /^.+@.+\..+$/),

    // actualEmailAddress: Ember.computed('emailAddress', function() {
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //     console.log('observer is called', this.get('emailAddress'));
    // })
});
