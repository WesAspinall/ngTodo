let ListController = function($scope, TodoService) {

  TodoService.getTodos().then ( (res) => {
    $scope.todos = res.data.results;
  });

};

ListController.$inject = ['$scope', 'TodoService'];

export default ListController;