import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit: function() {
     this.toggleProperty('isEditing')
   },
   submit: function(gift) {
     this.toggleProperty('isEditing');
     this.attrs.saveChanges(gift);
   }
  },
  isEditing: false
});
