(function () {
  'use strict';

  angular.module('appServices', [])
         .factory('factoryMangas', function($http){

            var urlBase = '/api/mangas';
            var servicios = {};

              servicios.obtenerMangas = function () {

                 return $http.get(urlBase);

              };

              servicios.guardarManga = function (datos) {

                return $http.post(urlBase, datos);

              }

          return servicios;

         });

})();