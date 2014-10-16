(function () {
  'use strict';

  angular.module('appServices', [])
         .factory('factoryMangas', function($http){

            var servicios = {};

              servicios.obtenerMangas = function () {

                  return $http.get('/api/mangas');

              };

              servicios.guardarManga = function (datos) {

                  return $http.post('/api/mangas', datos);

              };

              servicios.descripcionManga = function (id) {

                  return $http.get('api/manga/'+ id);

              };

              servicios.actualizarManga = function (id, datos) {

                  return $http.put('api/manga/'+ id, datos);

              }

          return servicios;

         });

})();