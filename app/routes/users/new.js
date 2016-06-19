import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
    },

  actions: {
    save() {
      let newUser = this.modelFor(this.routeName);
      newUser.save().then(() => {
        this.transitionTo('login')
      })
    }
  }
})
