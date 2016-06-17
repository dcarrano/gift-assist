import Ember from 'ember';

export function formatDate(data) {
  var format = data[0];
  var date = data[1];
  return moment(date).format(format);
}

export default Ember.Helper.helper(formatDate);
