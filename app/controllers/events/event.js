import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    toggleShow() {
      this.toggleProperty('isPeople')
      this.toggleProperty('peopleView')
    },
    eventAddPerson() {
      this.toggleProperty('isAddingPerson')
    },
    eventAddGift() {
      this.toggleProperty('isAddingGift')
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
    giftUpdate: function(gift, recipient) {
      let recipName = recipient.get("name")
      let giftName = gift.get('name')
      if (recipName === undefined || giftName === undefined || giftName === "") {
        alert("gift name and person name are required")
        this.toggleProperty('isAddingGift')
      } else {
        let recipCapName = recipName.split(" ").map(function(word) {return word.capitalize()}).join(" ")
        recipient.set('name', recipCapName)
        recipient.set('events', [this.get('model')])


        gift.set('event', this.get('model'))
        recipient.save().then((recipient) => {
          gift.set('recipient', recipient)
          gift.save().then((gift) => {
            this.toggleProperty('isAddingGift')
          })
        })
      }
    },
    editUpdate: function(model) {
      model.save();
    }
  }
});
