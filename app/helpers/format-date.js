Ember.Handlebars.registerBoundHelper('currentDate', function() {
  return moment().format('LL');
});
