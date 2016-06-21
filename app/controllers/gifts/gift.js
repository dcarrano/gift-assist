import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editUpdate: function(model) {
       model.save();
     }
  }
});
