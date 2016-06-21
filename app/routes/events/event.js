import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('event', params.event_id);
  },
  actions: {
    delete() {
      let eventToDelete = this.modelFor(this.routeName);
      eventToDelete.destroyRecord().then(() => {
        this.transitionTo('events')
      })
    }
  }
});
