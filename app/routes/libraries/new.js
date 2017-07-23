import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('library');
    },

    setupController(controller, model) {
        this._super(...arguments);

        controller.set('title', 'Create new library');
        controller.set('buttonLabel', 'Create');
    },

    renderTemplate() {
        this.render('libraries/form');
    },

    actions: {
        saveLibrary(newLibrary) {
            newLibrary.save()
                .then(() => this.transitionTo('libraries'));
        },
        
        willTransition() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
})