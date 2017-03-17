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
        .state('home-photo', {
            url: '/photo:id',
            templateUrl: 'templates/photo.tpl.html',
            controller: 'PhotoController'
        })
        .state('home.addPhoto', {
            url: '/addPhoto',
            templateUrl: 'templates/addPhoto.tpl.html'
        })
        .state('page-not-found', {
            url: '/not-found',
            template: `<h2>Wrong Turn.</h2>`
        });

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;