import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('recipient', params.recipient_id);
  },
  
  actions: {
    delete() {
      let recipientToDelete = this.modelFor(this.routeName);
      recipientToDelete.destroyRecord().then(() => {
        this.transitionTo('recipients')
      })
    }
  }
});
