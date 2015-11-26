/**
 * Created by Pavlos on 11/24/2015.
 */
app.controller("pagesAddCtrl", ['$scope','$interval', 'pagesService','$stateParams', '$state','title','$rootScope',  function($scope,$interval, pagesService,$stateParams,$state,title,$rootScope){

    $scope.title=title;
    $scope.date = new Date();
    $scope.page = {
        "title": "",
        description: "",
        type: 0, //0=Menu or 1=Events or 2=Coments
        isActive: false,
        publishedOn: $scope.date
    };

    // I added a page to server.
    $scope.addPage = function() {
        $scope.date = new Date();
        pagesService.postCall( $scope.page).then( $scope.killtimer())
            .then(
                $scope.navigate('pages'),
                function( errorMessage ) {
                    console.warn( errorMessage );
                }
            )
        ;
    }

    $scope.navigate = function (routeName) {
        $scope.title.setTitle('Pages');
        $state.go(routeName)
    };
    var timer= $interval(function(){
        $scope.date = new Date();
    },1000);

    $scope.killtimer=function(){
        if(angular.isDefined(timer))
        {
            $interval.cancel(timer);
            timer=undefined;
        }
    };
}]);