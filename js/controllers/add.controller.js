let AddController = function($scope, TodoService, $state) {
  
    $scope.addTodo = (obj) => {
      alert("thanks!")
      TodoService.addTodo(obj).then( (res) => {
      $scope.todo = {};
      $state.go('root.list');
    });
  };
};


AddController.$inject = ['$scope','TodoService', '$state'];

export default AddController;