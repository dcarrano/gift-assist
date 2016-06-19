import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),
  actions: {
    invalidateSession: function() {
        this.get('session').invalidate();
        this.transitionTo('login')
    }
  }
});
