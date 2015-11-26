/**
 * Created by Pavlos on 11/23/2015.
 */

app.directive('mdTable', function () {
    return {
        restrict: 'E',
        controller: function ($scope, $filter, $window) {
            var orderBy = $filter('orderBy');
            $scope.tablePage = 0;
            $scope.nbOfPages = function () {
                return Math.ceil($scope.pages.length / $scope.count);
            }, $scope.handleSort = function (field) {
                if ($scope.sortable.indexOf(field) > -1) {
                    return true;
                } else {
                    return false;
                }
            };
            $scope.order = function (predicate, reverse) {
                $scope.content = orderBy($scope.pages, predicate, reverse);
                $scope.predicate = predicate;
            };
            $scope.order($scope.sortable[0], false);
            $scope.getNumber = function (num) {
                return new Array(num);
            };
            $scope.editPage = function (page) {
                alert(page.id);
            };
            $scope.deletePageId = function (page) {
                $scope.deletePage(page);
            };
            $scope.goToPage = function (page) {
                $scope.tablePage = page;
            };
        },
        template: angular.element(document.querySelector('#md-table-template')).html()
    };
});


app.directive('mdColresize', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$evalAsync(function () {
                $timeout(function () {
                    $(element).colResizable({
                        liveDrag: true,
                        fixed: true
                    });
                }, 100);
            });
        }
    };
});

