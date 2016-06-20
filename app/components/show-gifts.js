import Ember from 'ember';

export default Ember.Component.extend({
  gifts: Ember.computed(function(){
    let event = this.get('event')
    let recipient = this.get('recipient')
    return recipient.get('gifts').filter(function(gift){
      let gifts_event = gift.get('event')
      if (gifts_event) {
        return gifts_event.get('id') === event.get('id')
      }
    })
  })
});
