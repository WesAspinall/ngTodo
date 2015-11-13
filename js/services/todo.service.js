let TodoService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/todos';


  this.getTodos = function () {    
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
      });
  };

  let Todos = function (obj) {
    this.title = obj.title;
    this.description = obj.description;
  };

   this.addTodo = function (obj) {
    let t = new Todos(obj);
    return $http.post(url, t, PARSE.CONFIG);
  };

};
TodoService.$inject = ['$http', 'PARSE'];

export default TodoService;