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
    },
    editUpdate: function(model) {
       model.save();
     }
  }
});
