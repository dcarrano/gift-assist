import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete() {
      let userToDelete = this.modelFor(this.routeName);
      userToDelete.destroyRecord().then(() => {
        this.transitionTo('login')
      })
    }
  }
});
