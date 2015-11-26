/**
 * Created by Pavlos on 11/21/2015.
 */
app.controller("mainCtrl", ['$scope', '$mdSidenav','title', 'pagesService', '$rootScope', function($scope, $mdSidenav,title,pagesService,$rootScope){
    $scope.title=title;
    $scope.title.setTitle('Responsive Pages');
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.counter = 0;
    $scope.pages = [];
    loadRemoteData();

    $rootScope.$on("CallParentMethodThree", function(){
        $scope.counter = $scope.counter-1;
    });

    $rootScope.$on("CallParentMethodTwo", function(){
        $scope.counter = $scope.counter+1;
    });

    $scope.menu = [
        {
            link: '',
            title: 'Dashboard',
            icon: 'dashboard'
        },
        {
            link: '',
            title: 'Pages',
            icon: 'pages'
        }
    ];
    $scope.admin = [
        {
            link: '',
            title: 'Trash',
            icon: 'delete'
        },
        {
            link: '',
            title: 'Settings',
            icon: 'settings'
        }
    ];

    // I apply the remote data to the local scope.
    function applyRemoteData ( newPages ) {
        $scope.pages = newPages;
        $scope.counter = $scope.pages.length;
    }


    // I load the remote data from the server.
    function loadRemoteData () {
        // The pageService returns a promise.
        pagesService.getCallJSON()
            .then(
                function( pages ) {
                    applyRemoteData( pages );
                }
            )
        ;
    }
}]);