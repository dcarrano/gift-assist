import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  recipient: Ember.computed(function(){
    // let event = this.get('event')
    var store = this.get('store');
    return store.createRecord('recipient')
    // return store.createRecord('recipient', {events: [event]})
  }),
  actions: {
    addEventPerson: function(recipient) {
      this.attrs.saveChanges(recipient);
    }
  }
});
