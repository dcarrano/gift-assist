
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('event');
  },
  actions: {
    save: function(event) {
      event.save().then(this.transitionTo("events.event", event)
    ).catch((reason) =>{
      alert("Something went wrong. Please try again.")
    })
  }}
});
