import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleShow() {
      this.toggleProperty('isPeople');
    }
  }
});
