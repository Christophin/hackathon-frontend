import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import SERVER from './server';
import setup from './setup';

import UserController from './controllers/user';
import PhotoController from './controllers/photo';
import CommentController from './controllers/comment';
import LayoutController from './controllers/layout';

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(AppConfig)
    .run(setup)
    .constant('SERVER', SERVER)
    .controller('UserController', UserController)
    .controller('PhotoController', PhotoController)
    .controller('CommentController', CommentController)
    .controller('LayoutController', LayoutController);