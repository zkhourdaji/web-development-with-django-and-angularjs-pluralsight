'use strict';
(function () {

  angular.module('scrumboard.demo', []).controller('ScrumboardController', [
    '$scope', '$http', ScrumboardController]);

  function ScrumboardController($scope, $http) {
    $scope.newCardTitle = "new";

    $scope.addNewCard = function (list, newCardTitle) {
      const newCard = {
        title: newCardTitle,
        list: list.id
      }
      $http.post('/scrumboard/cards/', newCard).then((response) => {
        list.cards.push(response.data);
        // $scope.newCardTitle = null;
      });
    }

    $scope.data = [];
    $http.get('/scrumboard/lists').then((response) => {
      $scope.data = response.data;
    })

  }

}());