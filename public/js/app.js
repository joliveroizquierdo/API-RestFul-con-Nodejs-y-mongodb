(function () {
  'use strict';

    angular.module('app', ['ngRoute', 'appControllers'])
           .config(config);

              function config ($routeProvider, $locationProvider) {

                //$locationProvider.html5Mode(true);

                $routeProvider

                .when('/api/mangas', {
                        templateUrl: 'views/listar.html',
                        controller: 'ListarCtrl'
                })
                .when('/insertar', {
                       templateUrl: 'views/insertar.html',
                       controller: 'InsertarCtrl'
                })
                .when('/api/manga/:id', {
                        templateUrl: 'views/descripcion.html',
                        controller: 'DescripcionCtrl'
                })
                .otherwise({
                      redirectTo: '/'
                });

              }

})();