/**
 * Created by Pavlos on 11/21/2015.
 */
app.controller("pagesCtrl", ['$scope', '$mdDialog', 'pagesService','$http','title', '$rootScope', function($scope, $mdDialog, pagesService,$http,title,$rootScope){
    // I contain the list of friends to be rendered.
    $scope.title=title;
    $scope.pages = [];

    $scope.thumbs = 'thumb';
    $scope.count = 5;

    loadRemoteData();

    $rootScope.$on("CallParentMethod", function(){
        loadRemoteData();
    });
    $rootScope.$on("CallParentMethodTwo", function(){
        loadRemoteData();
    });
    $rootScope.$on("CallParentMethodThree", function(){
        loadRemoteData();
    });
    $scope.headers = [
        {
            name: '',
            field: 'thumb'
        },
        {
            name: 'Title',
            field: 'title'
        },
        {
            name: 'Description',
            field: 'description'
        },
        {
            name: 'Type',
            field: 'type'
        },
        {
            name: 'Active',
            field: 'isActive'
        },
        {
            name: 'Date created',
            field: 'publishedOn'
        }
    ];

    $scope.custom = {
        title: 'bold',
        description: 'black',
        type:'black',
        isActive:'black',
        publishedOn:'black'
    };

    $scope.sortable = [
     //   'title',
       // 'description',
       // 'type',
       /// 'isActive',
       // 'publishedOn'
    ];


    // I apply the remote data to the local scope.
    function applyRemoteData ( newPages ) {
        $scope.pages = newPages;
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

    //Delete a page by id.
    $scope.deletePage  =function (page) {
        // The pageService returns a promise.
        pagesService.deleteCall(page.id)
            .then(loadRemoteData).then($rootScope.$emit("CallParentMethodThree", {}))
        ;
    }

}]);


