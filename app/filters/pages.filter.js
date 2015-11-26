/**
 * Created by Pavlos on 11/23/2015.
 */
app.filter('startFrom', function () {
    return function (input, start) {
        start = +start;
        return input.slice(start);
    };
});
