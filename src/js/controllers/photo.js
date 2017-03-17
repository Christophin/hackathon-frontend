import SERVER from '../server'

function PhotoController ($scope, $http, SERVER, $state)  {
    $scope.photos = [];
    $scope.photo = [];
    $scope.getPhotos = ()  => {
        $http.get(`${SERVER}/photos`).then(resp => {
            $scope.photos = resp.data
        })
    };

    $scope.onePhoto = ()   =>  {
        $http.get(`${SERVER}/photo/${$state.params.id}`).then(resp   =>  {
            $scope.photo = resp.data;
            $state.go()
        })

    };
    $scope.addPhoto = (data)    =>  {
        $http.post(`${SERVER}/photos`, data).then(resp =>   {
            $state.go(`photo`)
        })
    };
    $scope.changeState = () => {
        $state.go('home.addPhoto');
    }
}

PhotoController.$inject = ['$scope', '$http', 'SERVER', '$state' ];

export default PhotoController;