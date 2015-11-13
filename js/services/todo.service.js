let TodoService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/todos';


  this.getTodos = function () {    
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
  };

   this.getTodo = function (objectId) {     
      return $http({
        method: 'GET',
        url: url + '/' + objectId,
        headers: PARSE.CONFIG.headers,
        cache: true
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

    this.editTodo = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

   this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};
TodoService.$inject = ['$http', 'PARSE'];

export default TodoService;