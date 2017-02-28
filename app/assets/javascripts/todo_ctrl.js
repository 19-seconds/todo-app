(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = ["Walk the dog", "Make dinner", "Take out the trash"];

  });
})();