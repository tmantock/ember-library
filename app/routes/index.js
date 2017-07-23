import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('invitation');
    },

    actions: {
        saveInvitation(invitation) {
            invitation.save()
                .then(r => {
                    this.controller.set('responseMessage', `Thank you! We've just saved your email address witht the following id: ${r.get('id')}`);
                    this.controller.set('model.email', '');
                });
        },
        
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});