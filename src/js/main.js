import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';
import SERVER from './server';

import UserController from './controllers/user';

angular
    .module('app', ['ui.router'])
    .config(AppConfig)
    .constant('SERVER', SERVER)
    .controller('UserController', UserController);