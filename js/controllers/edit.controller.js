let EditTodoController = function($scope, $stateParams, TodoService, $state) {

  TodoService.getTodo($stateParams.objectId).then( (res) => {
    $scope.singleTodo = res.data;
  });

  $scope.editTodo = (obj) => {
      alert("saved!");
    TodoService.editTodo(obj).then( (res) => {
      $state.go('root.list');
    });
  };

  $scope.delete = (obj) => {
    alert("deleted!")
    TodoService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };


};

EditTodoController.$inject = ['$scope', '$stateParams', 'TodoService', '$state'];
export default EditTodoController;