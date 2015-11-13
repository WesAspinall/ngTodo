let AddController = function($scope, TodoService) {
  
    $scope.addTodo = (obj) => {
    TodoService.addTodo(obj).then( (res) => {
      $scope.todo = {};
    });
  };

};


AddController.$inject = ['$scope','TodoService'];

export default AddController;