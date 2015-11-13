let TodoService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/todos';


  this.getTodos = function () {    
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
      });
  };

};
TodoService.$inject = ['$http', 'PARSE'];

export default TodoService;