let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      controller: 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:objectId',
      controller: 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })
    .state('root.single', {
      url: '/single/:objectId',
      controller: 'SingleTodoController',
      templateUrl: 'templates/singleTodo.tpl.html'
    })
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;