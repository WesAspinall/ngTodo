let EditTodoController = function($scope, $stateParams, TodoService, $state) {
  
  TodoService.getTodo($stateParams.objectId).then( (res) => {
    $scope.singleTodo = res.data;
  });

  $scope.editTodo = function (obj) {
    TodoService.editTodo(obj).then( (res) => {

      state.go('root.list');
    });
  };

  $scope.delete = function (obj) {
    alert("deleted!")
    TodoService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };


};

EditTodoController.$inject = ['$scope', '$stateParams', 'TodoService', $state];
export default EditTodoController;