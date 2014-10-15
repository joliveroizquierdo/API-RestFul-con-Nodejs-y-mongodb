(function () {
  'use strict';
    
    angular.module('appServices', [])
           .factory('listarMangas', listarMangas)
           .factory('insertarManga', insertarManga);
    
            var urlBase = '/api/mangas';
    
                function listarMangas($http){

                    return $http.get(urlBase);

                }

                function insertarManga($http){
                	
                	return $http.post(urlBase);

                	//return {'mensaje':'Hola'};

                }

})();