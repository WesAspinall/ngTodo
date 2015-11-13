let AddController = function($scope, TodoService, $state) {
  
    $scope.addTodo = (obj) => {
      TodoService.addTodo(obj).then( (res) => {
      $scope.todo = {};
      $state.go('root.list');
    });
  };

};


AddController.$inject = ['$scope','TodoService', '$state'];

export default AddController;