/**
 * Created by Pavlos on 11/25/2015.
 */
app.factory('title', function() {
    var title = '';
    var myTitleService = {};

    myTitleService.setTitle = function(item) {
        title = item;
    };

    myTitleService.title = function() {
        return title;
    };

    return myTitleService;
});