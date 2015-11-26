/**
 * Created by Pavlos on 11/21/2015.
 */
app.service("pagesService",function($http, $q,$rootScope,toaster){

    // Return public API.
    var service ={
        pages : [],
        page : {},
        getCallJSON: getCallJSON,
        getCallJSONParam: getCallJSONParam,
        postCall: postCall,
        putCall:putCall,
        deleteCall:deleteCall
    };

    return service;

    // I get all of the pages in the remote collection.
    function getCallJSON() {
        var params = {};

        var config = {
            params: params
        };
        var def = $q.defer();
        $http.get("http://pagesmanagement.azurewebsites.net/api/ResponsivePages", config)
            .success(function (data, status, headers, config)
            {
                service.pages = data;
                def.resolve(data);
            })
            .error(function (data, status, headers, config)
            {
                toaster.pop('error', "Σφάλμα", '<p>Error: status </p>', null, 'trustedHtml');
                console.log( data);
                def.reject("Failed to get pages");
            });
         return def.promise;
    }

    // I get the friend with the given ID from the remote collection.
    function getCallJSONParam(id) {
        var params = {
            id:id
        };

        var config = {
            params: params
        };
        var def = $q.defer();
        $http.get("http://pagesmanagement.azurewebsites.net/api/ResponsivePages", config)
            .success(function (data, status, headers, config)
            {
                service.page = data;
                def.resolve(data);
            })
            .error(function (data, status, headers, config)
            {
                toaster.pop('error', "Σφάλμα", '<p>Error: status </p>', null, 'trustedHtml');
                console.log( data);
                def.reject("Failed to get spesific page");
            });
        return def.promise;
    }
    // I add a page to the remote collection.
    function postCall(page) {
        var params = {

        };

        var config = {
            params: params
        };
        var def = $q.defer();
        $http.post("http://pagesmanagement.azurewebsites.net/api/ResponsivePages",page, config)
            .success(function (data, status, headers, config)
            {
                toaster.pop('success', "Δημιουργία σελιδας", '<p>Η δημιουργία ολοκληρώθηκε με επιτυχεία!!!</p>', 3000, 'trustedHtml');
                $rootScope.$emit("CallParentMethodTwo", {});
                console.log( data);
                def.resolve(data);
            })
            .error(function (data, status, headers, config)
            {

                toaster.pop('error', "Δημιουργία σελιδας", '<p>Error: status </p>', null, 'trustedHtml');
                console.log( data);
                def.reject("Failed to post page");
            });
        return def.promise;
    }

    // I edit and save changes from page with the given id to the remote collection.
    function putCall(id,page) {
        var params = {
            id:id
        };

        var config = {
            params: params
        };
        var def = $q.defer();
        return $http.put("http://pagesmanagement.azurewebsites.net/api/ResponsivePages",page, config)
            .success(function (data, status, headers, config)
            {
                toaster.pop('success', "Ενημέρωση αλλαγών", '<p>Η ενημέρωση ολοκληρώθηκε με επιτυχεία!!!</p>', 3000, 'trustedHtml');
                console.log( data);
                def.resolve(data);
            })
            .error(function (data, status, headers, config)
            {
                toaster.pop('error', "Ενημέρωση αλλαγών", '<p>Error: status </p>', null, 'trustedHtml');
                console.log( data);
                def.reject("Failed to put page");
            });
        return def.promise;
    }

    // I delete a page with the given id to the remote collection.
    function deleteCall(id) {
        var params = {
            id: id
        };

        var config = {
            params: params
        };
        var def = $q.defer();
        return $http.delete("http://pagesmanagement.azurewebsites.net/api/ResponsivePages", config)
            .success(function (data, status, headers, config)
            {
                toaster.pop('success', "Διαγραφή", '<p>Η διαγραφή ολοκληρώθηκε με επιτυχεία!!!</p>', 3000, 'trustedHtml');
                console.log(data);
                def.resolve(data);
            })
            .error(function (data, status, headers, config)
            {
                toaster.pop('error', "Διαγραφή", '<p>Error: status </p>', null, 'trustedHtml');
                console.log( data);
                def.reject("Failed to detele page");
            });
        return def.promise;
    }
});