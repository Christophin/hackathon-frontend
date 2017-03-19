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
        .state('home.addPhoto', {
            url: '/addPhoto',
            templateUrl: 'templates/addPhoto.tpl.html',
            controller: 'PhotoController'
        })
        .state('home.addComment',   {
            url: '/:id/comment',
            templateUrl: 'templates/addComment.tpl.html',
            controller: 'CommentController'
        })
        .state('profile',  {
          url: '/profile/:id',
          templateUrl: 'templates/profile.tpl.html',
          controller: 'UserController'
        })
        .state('profile.img',   {
            url: '/image/:imgId',
            templateUrl: 'templates/image.tpl.html',
            controller: 'UserController'
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
