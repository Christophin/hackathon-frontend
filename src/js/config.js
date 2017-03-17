function Config ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.tpl.html',
            controller: 'PhotoController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.tpl.html',
            controller: 'UserController'
        })
        .state('photo', {
            url: '/photo:id',
            templateUrl: 'templates/photo.tpl.html',
            controller: 'PhotoController'
        })
        .state('photo.comment', {
            url: '/photo:id',
            templeteUrl: 'templates.comment.tpl.html',
            controller: 'CommentController'
        })
        .state('page-not-found', {
            url: '/not-found',
            template: `<h2>Wrong Turn.</h2>`
        });

    $urlRouterProvider.when('', '/login');
    $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;