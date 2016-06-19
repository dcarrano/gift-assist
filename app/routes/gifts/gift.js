import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('gift', params.gift_id);
  },
  
  actions: {
    delete() {
      let giftToDelete = this.modelFor(this.routeName);
      giftToDelete.destroyRecord().then(() => {
        this.transitionTo('gifts')
      })
    }
  }
});
