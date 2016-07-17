var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current Timestamp', now.unix());

var timestamp = 1468724454;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM

console.log('challenge moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
