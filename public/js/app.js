(function () {
  'use strict';

    angular.module('app', ['ngRoute', 'appControllers'])
           .config(config);

              function config ($routeProvider) {

                $routeProvider

                .when('/api/mangas', {
                        templateUrl: 'views/listar.html',
                        controller: 'ListarCtrl'
                })
                .when('/insertar', {
                       //templateUrl: 'views/salir.html',
                })
                .otherwise({
                      redirectTo: '/'
                });

              }

})();
