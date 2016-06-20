import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    toggleShow() {
      this.toggleProperty('isPeople')
    },
    eventAddPerson() {
      this.toggleProperty('isAddingPerson')
    },
    update: function(recipient) {
      let recipient_names = this.get('model.recipients').mapBy('name')
      let name = recipient.get("name")
      let capName = name.split(" ").map(function(word) {return word.capitalize()}).join(" ")
      if (recipient_names.indexOf(capName) === -1) {
        recipient.set('name', "")
        let temp_recipient = this.store.createRecord('recipient')
        temp_recipient.set('name', capName)
        temp_recipient.set('events', [this.get('model')])
        temp_recipient.save();
      } else {
        alert("That name is already associated with this event")
      }
      // event recipients includes a recipient by this name, DON'T call event.update()
      // instead show a message or an alert that this recipient already exists
      // let event = this.get('model')
      // event.get('recipients').pushObject(recipient)
      // event.update().then((response)=>{
      //   debugger;
      // })
      // let name = recipient.get("name")
      // let capName = name.split(" ").map(function(word) {return word.capitalize()}).join(" ")
      // let temp_recipient = this.store.createRecord('recipient')
      // recipient.set('name', "")
      // temp_recipient.set('name', capName)
      // temp_recipient.set('events', recipient.get("events"))
      // temp_recipient.save();
    }
  }
});
