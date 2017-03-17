function CommentController ($scope, $http, SERVER, $state) {
    $scope.addComment = (data)  =>  {
        $http.post(`${SERVER}/photo/${$state.params.id}/comment`, data)
            .then(resp =>   {
                console.log(resp);
                $state.go('home.photos')
            })
    }
}

CommentController.$inject = ['$scope', '$http', 'SERVER', '$state' ];

export default CommentController;