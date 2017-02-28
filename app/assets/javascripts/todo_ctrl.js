(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = [
      {
        name: "Walk the dog",
        priority: 7,
        completed: false
      },
      {
        name: "Practice Piano",
        priority: 1,
        completed: false
      },
      {
        name: "Clean dishes",
        priority: 10,
        completed: false
      }
    ];


    $scope.addTask = function(name, priority) {
      if (name && priority) {
        var task = {
          name: name,
          priority: priority,
          completed: false
        }
        $scope.tasks.push(task);
      }
    };

    $scope.completeTask = function(task) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks[index].completed = true;
    }

    window.$scope = $scope;

  });
})();