import SERVER from '../server'

function PhotoController ($scope, $http, SERVER, $state)  {
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
            $state.go(`photo`)
        })
    };
    $scope.viewAddPhoto = () => {
        $state.go('home.addPhoto');
    };
    $scope.viewAddComment = ()  =>  {
        $state.go('home.addComment');
    };
}

PhotoController.$inject = ['$scope', '$http', 'SERVER', '$state' ];

export default PhotoController;