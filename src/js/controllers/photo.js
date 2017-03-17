import SERVER from '../server'

function PhotoController ($scope, $http, SERVER, $cookies, $state)  {
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
            $state.go(`/photo/${resp.data.id}`)
        })
    }
}

PhotoController.$inject = ['$scope', '$http', 'SERVER', '$cookies', '$state' ];

export default PhotoController;