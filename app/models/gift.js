import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  price: attr('number'),
  priority: attr('number'),
  event: belongsTo('event', { async: true }),
  recipient: belongsTo('recipient', { async: true })
});
