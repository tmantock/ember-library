import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('contact');
    },

    actions: {
        submitMessage(contact) {
            contact.save()
                .then(() => {
                    this.set('responseMessage', `Thank you! We've just sent your message. You'll get a response at ${this.get('emailAddress')}`);
                    this.controller.set('model.email', '');
                    this.controller.set('model.message', '');
                });
        },

        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
