function CommentController ($scope, $http, SERVER, $cookies, $state) {
    $scope.comments = [];
    $scope.getComments = () =>  {
        $http.get(`${SERVER}/photo/${state.params.id}/comments`)
            .then(resp =>   {
                $state.comments = resp.data;
            })
    }
}