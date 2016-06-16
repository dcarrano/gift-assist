import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events');
  this.route('gifts');
  this.route('recipients');
  this.route('users');
});

export default Router;
