let SingleTodoController = function($scope, $stateParams, TodoService) {
  
  TodoService.getTodo($stateParams.objectId).then( (res) => {
    $scope.singleTodo = res.data;
  });

};
SingleTodoController.$inject = ['$scope', '$stateParams', 'TodoService'];
export default SingleTodoController;