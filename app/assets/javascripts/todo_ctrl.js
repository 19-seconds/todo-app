(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = ["Walk the dog", "Make dinner", "Take out the trash", "practice piano"];

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
    };

    window.$scope = $scope;

  });
})();