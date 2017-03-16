function Config ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.tpl.html',
            controller: 'UserController'
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