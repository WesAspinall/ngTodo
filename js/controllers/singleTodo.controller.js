let SingleTodoController = function($scope, $stateParams, TodoService, $state) {
  
  TodoService.getTodo($stateParams.objectId).then( (res) => {
    $scope.singleTodo = res.data;
  });

    $scope.deleteMe = function (obj) {
    TodoService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };
};

SingleTodoController.$inject = ['$scope', '$stateParams', 'TodoService'];
export default SingleTodoController;