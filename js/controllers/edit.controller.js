let EditController = function($scope, $stateParams, TodoService) {
  
TodoService.getTodos($stateParams.whiskeyId).then( (res) => {
    $scope.singleTodo = res.data;
  });

  $scope.editTodo = function (obj) {
    TodoService.editTodo(obj).then( (res) => {
      console.log(res);
    });
  };
  

};
EditController.$inject = ['$scope', '$stateParams', 'TodoService'];
export default EditController;