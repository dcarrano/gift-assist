import Ember from 'ember';

export default Ember.Component.extend({
  gifts: Ember.computed(function(){
    let event = this.get('event')
    let recipient = this.get('recipient')
    return recipient.get('gifts').filter(function(gift){
      return gift.get('event.id') === event.get('id')
    })
  })
});
