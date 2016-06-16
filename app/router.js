import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('event', {
      path: ':event_id'
    });
  this.route('gifts', function() {
    this.route('new');
    this.route('gift', {
      path: ':gift_id'
    });

  this.route('recipients', function() {
    this.route('new');
    this.route('recipient', {
      path: ':recipient_id'
    });

  this.route('users', function() {
    this.route('new');
    this.route('user', {
      path: ':user_id'
    });
});

export default Router;
