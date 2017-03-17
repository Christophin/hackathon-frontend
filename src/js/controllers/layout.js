function LayoutController ($scope, $rootScope, $cookies, $state, $http) {

    $scope.signOut = () => {
        $rootScope.loggedIn = false;
        $cookies.remove('access-token');
        $http.defaults.headers.common['access-token'] = null;
        $state.go('home');
    };

}

LayoutController.$inject = ['$scope', '$rootScope', '$cookies', '$state', '$http'];

export default LayoutController;