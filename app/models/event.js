import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  date: attr('date'),
  description: attr('string'),
  user: belongsTo('user', { async: true }),
  gifts: hasMany('gift', { async: true }),
  recipients: hasMany('recipient', { async: true })
});
