import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
     this.toggleProperty('isEditing')
   },
   submit: function(recipient) {
     this.toggleProperty('isEditing');
     this.attrs.saveChanges(recipient);
   }
  },
  isEditing: false
});
