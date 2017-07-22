import Ember from 'ember';

export default Ember.Controller.extend({
    headerMessage: 'Coming Soon',
    emailAddress: '',

    isDisabled: Ember.computed.not('isValid'),
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

    // actualEmailAddress: Ember.computed('emailAddress', function() {
    //     console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //     console.log('observer is called', this.get('emailAddress'));
    // })

    actions: {
        saveInvitation() {
            const email = this.get('emailAddress');
            const invitation = this.store.createRecord('invitation', { email });
            invitation.save()
                .then(r => {
                    this.set('responseMessage', `Thank you! We've just saved your email address witht the following id: ${r.get('id')}`);
                    this.set('emailAddress', '');
                });
        }
    }
});
