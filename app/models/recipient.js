import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  relationship: attr('string'),
  user: belongsTo('user', { async: true }),
  events: hasMany('event', { async: true }),
  recipients: hasMany('recipient', { async: true })
});
