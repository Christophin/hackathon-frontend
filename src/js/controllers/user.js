import SERVER from '../server'

function UserController ($scope, $http, SERVER, $cookies, $state) {
    $scope.signUp = (data) =>   {
        $http.post(`${SERVER}/users`, data).then(resp =>    {
            console.log(resp.data)
        })
            .catch(error => {
                console.log(error)
            })
    };
    $scope.login = (data)   =>  {
      $http.post(`${SERVER}/login`, data).then(resp =>  {
          $cookies.put('access-token', resp.data.token);
          $state.go('home');
      })
          .catch(error => {
              console.log(error);
          })
    }
}

UserController.$inject = ['$scope', '$http', 'SERVER', '$cookies', '$state' ];

export default UserController;