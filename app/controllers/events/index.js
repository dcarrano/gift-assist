import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newEvent() {
      this.transitionToRoute('events.new')
    }
  }
});
