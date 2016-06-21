import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  gift: Ember.computed(function(){
    var store = this.get('store');
    return store.createRecord('gift')
  }),
  recipient: Ember.computed(function(){
    var store = this.get('store');
    return store.createRecord('recipient')
  }),
  actions: {
    addEventGift: function(gift, recipient) {
      this.attrs.saveNewGift(gift, recipient);
    }
  }
});
