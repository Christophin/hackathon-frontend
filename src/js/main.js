import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';

import UserController from './controllers/user';
import PhotoController from './controllers/photo';
import CommentController from './controllers/comment'

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(AppConfig)
    .constant('SERVER', SERVER)
    .controller('UserController', UserController)
    .controller('PhotoController', PhotoController)
    .controller('CommentController', CommentController);