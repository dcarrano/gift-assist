import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
      edit: function() {
       this.toggleProperty('isEditing')
     },
     submit: function(event) {
       this.toggleProperty('isEditing');
       this.attrs.saveChanges(event);
     }
   },
   isEditing: false
 });
