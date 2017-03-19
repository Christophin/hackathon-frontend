import SERVER from '../server'

function UserController ($scope, $http, SERVER, $cookies, $state, $rootScope) {
    $scope.currentUser = [];
    function getUser (data) {
        $http.get(`${SERVER}/user/${data}`, data).then(resp    =>  {
            $scope.currentUser = resp.data;
            console.log(resp.data);
        })
    }
    getUser(parseInt($state.params.id));
    $scope.signUp = (data) =>   {
        console.log(data);
        $http.post(`${SERVER}/users`, data).then(resp =>    {
            console.log(resp.data)
        })
            .catch(error => {
                console.log(error)
            })
    };
    $scope.login = (data)   =>  {
        console.log(data);
      $http.post(`${SERVER}/login`, data).then(resp =>  {
          $rootScope.loggedIn = true;
          $cookies.put('access-token', resp.data.token);
          $http.defaults.headers.common['access-token'] = resp.data.token;
          $state.go('home');
          console.log(resp.data.token)
      })
          .catch(error => {
              console.log(error);
          })
    };
    $scope.addLike = (data) =>  {
        $http.post(`${SERVER}/photo/${parseInt(data)}/like`)
    };

}

UserController.$inject = ['$scope', '$http', 'SERVER', '$cookies', '$state', '$rootScope' ];

export default UserController;