(function () {
  'use strict';
    
    angular.module('appControllers', ['appServices'])
           .controller('ListarCtrl', ListarMangas)
           .controller('InsertarCtrl', InsertarManga)
           .controller('DescripcionCtrl', DescripcionManga);
    
                function ListarMangas($scope, factoryMangas){

                    factoryMangas.obtenerMangas().success(function(data){
                        
                        $scope.listado = data;

                    }).error(function(error){
                            alert(error);
                    });
                    
                }

                function InsertarManga($scope, factoryMangas, $location){

                    $scope.manga = {};

                    $scope.insertar = function(datos){
                      
                      factoryMangas.guardarManga(datos).success(function(data){

                          alert(data.mensaje +' '+ $scope.manga.nombre);
                          
                          $location.path('/api/mangas');

                      }).error(function(data){
                          alert('error al insertar regrese otro dia');
                      });
      
                    }

                }

                function DescripcionManga($scope, factoryMangas, $location, $routeParams){

                    $scope.manga = {};

                    $scope.manga.id = $routeParams.id;

                    factoryMangas.descripcionManga($scope.manga.id).success(function(data) {
                      
                        $scope.manga.nombre = data.nombre;

                    }).error(function(data){
                        alert(data);
                    });

                        $scope.actualizar = function(datos){

                          factoryMangas.actualizarManga($scope.manga.id, datos).success(function(data){

                              alert(data.mensaje);

                              $location.path('/api/mangas');

                            }).error(function(data){
                                alert(data);
                            });

                        };

                }

})();