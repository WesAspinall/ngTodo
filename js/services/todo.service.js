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

  let Todo = function (obj) {
    this.name = obj.name;
    this.bio = obj.bio;
    this.pic =obj.pic;
  };

   this.addTodo = function (obj) {
    let t = new Todo(obj);
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