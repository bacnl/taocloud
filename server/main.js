import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  // The method expects a valid IPv4 address
  'getApiSong': function (text) {
    // Construct the API URL
    var apiUrl = 'https://api.soundcloud.com/search?q=' + text + '&client_id=JlZIsxg2hY5WnBgtn3jfS0UYCl0K8DOg';
    console.log(apiUrl);
    // query the API
    var response = HTTP.get(apiUrl);
    //console.log(response.data);
    return response.data.collection;
  }
});