'use strict';

var Firebase;

angular.module('hshacksChatApp')
  .factory('Chat', function ($firebase) {
    var ref = new Firebase('https://lahacks.firebaseio.com');
    return $firebase(ref.limit(100));
  });
