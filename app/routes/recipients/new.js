import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('recipient')
  },

  actions: {
    save() {
      let newRecipient = this.modelFor(this.routeName);
      newRecipient.save().then(() => {
        this.transitionTo('recipients.recipient', newRecipient)
      })
    }
  }
});
