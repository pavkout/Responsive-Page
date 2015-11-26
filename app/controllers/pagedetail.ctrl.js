/**
 * Created by Pavlos on 11/24/2015.
 */
app.controller("pagesDetailCtrl", ['$scope', 'pagesService','$stateParams', '$state','title','$rootScope', function($scope, pagesService,$stateParams,$state,title,$rootScope){
    $scope.title=title;

    loadRemoteData();
    $scope.page ={};
    // I apply the remote data to the local scope.
    function applyRemoteData ( newPages ) {
        $scope.page = newPages;
    }


    // I load the remote data from the server.
    function loadRemoteData () {
        // The pageService returns a promise.
        pagesService.getCallJSONParam($stateParams.id)
            .then(
                function( page ) {
                    applyRemoteData( page );
                }
            )
        ;
    }

    // I update data from spesific page.
    $scope.updatePage =function () {
        // The pageService returns a promise.
        pagesService.putCall($stateParams.id,$scope.page).then($rootScope.$emit("CallParentMethod", {}))
            .then($scope.navigate('pages')
            )
        ;
    }


    $scope.navigate = function (routeName) {
        $state.go(routeName)
    };

}]);