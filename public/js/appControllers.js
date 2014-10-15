(function () {
  'use strict';
    
    angular.module('appControllers', ['appServices'])
           .controller('ListarCtrl', ListarMangas)
           .controller('InsertarCtrl', InsertarManga);
    
                function ListarMangas($scope, factoryMangas){

                    factoryMangas.obtenerMangas().success(function(data){
                        
                        $scope.listado = data;

                    }).error(function(error){
                            alert(error);
                    });
                    
                }

                function InsertarManga($scope, factoryMangas, $location){

                    $scope.manga = {};

                    $scope.insertar = function(){
                      
                      factoryMangas.guardarManga($scope.manga).success(function(data){
                          alert(data.mensaje +' '+ $scope.manga.nombre);
                          $scope.manga = {};
                          $location.path('/api/mangas');
                      }).error(function(data){
                          alert('error al insertar regrese otro dia');
                      });
      
                    }

                }

})();