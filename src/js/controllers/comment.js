function CommentController ($scope, $http, SERVER, $state) {
    $scope.commentBox = [];
    function init() {
        $http.get(`${SERVER}/photo/${$state.params.id}/comment`).then(resp => {
            $scope.commentBox = resp.data;
            console.log(resp.data)
        })
    }
    init();
    $scope.killModal = function () {
        $state.go('home');
    };
    $scope.addComment = (data)  =>  {
        $http.post(`${SERVER}/photo/${$state.params.id}/comment`, data)
            .then(resp =>   {
                console.log(resp);

            })
            .then($state.reload())
    }
}



CommentController.$inject = ['$scope', '$http', 'SERVER', '$state' ];

export default CommentController;