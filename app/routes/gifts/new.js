import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('gift')
  },

  actions: {
    save() {
      let newGift = this.modelFor(this.routeName);
      newGift.save().then(() => {
        this.transitionTo('gifts.gift', newGift)
      })
    }
  }
});
