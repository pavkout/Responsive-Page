/**
 * Created by Pavlos on 11/21/2015.
 */
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            controller:'',
            templateUrl: 'views/underconstruction.html'
        })
        .state('pages', {
            url: '/pages',
            controller:'pagesCtrl',
            templateUrl: 'views/pages.html'
        })
        .state('add', {
            url: '/add',
            controller:'pagesAddCtrl',
            templateUrl: 'views/addpage.html'
        })
        .state('detail', {
            url: '/edit/:id',
            controller:'pagesDetailCtrl',
            templateUrl: 'views/detail.html'
        })
        .state('delete', {
            url: '/trash',
           // controller:'pagesCtrl',
            templateUrl: 'views/underconstruction.html'
        })
    .state('settings', {
        url: '/settings',
        //controller:'pagesCtrl',
        templateUrl: 'views/underconstruction.html'
    });
});