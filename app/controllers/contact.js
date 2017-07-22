import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    message: '',
    isDisabled: Ember.computed.not('isValid'),
    isValid: Ember.computed.and('isValidEmail', 'isValidMessage'),
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isValidMessage: Ember.computed.match('message', /^[a-zA-z0-9 \.,?!]{5,}/),

    actions: {
        submitMessage() {
            const email = this.get('emailAddress'),
                message = this.get('message');
            const contact = this.store.createRecord('contact', {
                email,
                message
            });

            contact.save()
                .then(r => {
                    this.set('responseMessage', `Thank you! We've just sent your message. You'll get a response at ${this.get('emailAddress')}`);
                    this.set('emailAddress', '');
                    this.set('message', '');
                });
        }
    }
});
