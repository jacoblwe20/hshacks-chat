'use strict';

angular.module('hshacksChatApp')
  .controller('ChatCtrl', function ($scope, Chat) {
    $scope.user = {
      user: 'Lil\' Jon',
      userImageURL: 'http://www.xxlmag.com/wp-content/uploads/2010/02/lil-jon-news.gif'
    };
    $scope.messages = Chat;

    $scope.addMessage = function () {
      $scope.messages.$add({
        user: $scope.user.user,
        message: $scope.message,
        userImageURL: $scope.user.userImageURL
      });

      $scope.message = '';
    };

    $scope.removeMessage = function ( message ) {
      $scope.messages.$remove( message.$id );
    };

  });
