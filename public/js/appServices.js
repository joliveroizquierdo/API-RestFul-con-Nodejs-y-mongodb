(function () {
  'use strict';
    
    angular.module('appServices', [])
           .factory('Mangas', Mangas);
    
            var urlBase = '/api/mangas';
    
                function Mangas($http){

                    return $http.get(urlBase);

                }

})();