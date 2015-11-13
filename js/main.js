import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import ListController from './controllers/list.controller';
import TodoService from './services/todo.service.js';
angular
.module('app', ['ui.router'])
.constant('PARSE', {
  URL:'https://api.parse.com/1/',
  CONFIG:{
      headers: {
        'X-Parse-Application-Id': 'Xbb94U6qiPANZ36Ge4eCTxon0Q28fiA3K5wddeEQ',
        'X-Parse-REST-API-Key': 'VkrnmdMXdr6se14fXKEHuxpiPVjYaWOYGEXjmKjU',
    }
  }
})
.config(config)
.controller('ListController', ListController)
.service('TodoService', TodoService);