function CommentController ($scope, $http, SERVER, $state) {
    $scope.killModal = function () {
        $state.go('home');
    };
    $scope.addComment = (data)  =>  {
        $http.post(`${SERVER}/photo/${$state.params.id}/comment`, data)
            .then(resp =>   {
                console.log(resp);
                $state.go('home')
            })
    }
}

CommentController.$inject = ['$scope', '$http', 'SERVER', '$state' ];

export default CommentController;