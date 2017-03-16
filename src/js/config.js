function Config ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.tpl.html',
            controller: 'UserController'
        })
        .state('page-not-found', {
            url: '/not-found',
            template: `<h2>No such page. Haha. You're dumb.</h2>`
        });

    $urlRouterProvider.when('', '/home');
    $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;