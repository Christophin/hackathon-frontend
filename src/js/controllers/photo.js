import SERVER from '../server'

function PhotoController ($scope, $http, SERVER, $state, $rootScope, $cookies)  {
    $scope.posts = [];
    function init() {
        $http.get(`${SERVER}/photos`).then(resp => {
            $scope.posts = resp.data
        })
    }
    init();
    $scope.onePhoto = ()   =>  {
        $http.get(`${SERVER}/photo/${$state.params.id}`).then(resp   =>  {
            $scope.posts = resp.data;
            $state.go()
        })

    };
    $scope.addPhoto = (data)    =>  {
        console.log(data);
        $http.post(`${SERVER}/photos`, data).then(resp =>   {
            $state.go(`home`)
        })
    };
    $scope.viewAddPhoto = () => {
        $state.go('home.addPhoto');
    };
    $scope.addComment = (data)  =>  {
        $http.post(`${SERVER}/photo/${$state.params.id}/comment`)
    };
    $scope.logOut = () => {
        $rootScope.loggedIn = false;
        $cookies.remove('access-token');
        $http.defaults.headers.common['access-token'] = null;
        $state.go('login');
    };
    $scope.logIn =  ()  =>  {
        $state.go('login')
    }
}

PhotoController.$inject = ['$scope', '$http', 'SERVER', '$state', '$rootScope', '$cookies' ];

export default PhotoController;