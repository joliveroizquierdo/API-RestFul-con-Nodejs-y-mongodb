(function () {
  'use strict';
    
    angular.module('appControllers', ['appServices'])
           .controller('ListarCtrl', ListarMangas)
           .controller('InsertarCtrl', InsertarManga);
    
                //ListarMangas();para ver si se ejecuta el lsitar despues de insertar

                function ListarMangas($scope, listarMangas){

                    listarMangas.success(function(data){
                        
                        $scope.listado = data;
                       //console.log(data);

                    }).error(function(error){
                            alert(error);
                    });
                    
                }

                function InsertarManga($scope, $location, insertarManga){

                    $scope.manga = {};

                   /*$scope.insertar = function(datos){
                      
                      insertarManga.success(function(data){
                        alert(data.mensaje +' '+ $scope.manga.nombre);
                        $scope.manga = {};
                        //si se guardan los datos, pero no se mestran a menos que se vuelva recargar la pagina, investigar comomhacer para que se muestren los datos despues de guardarlos
                        $location.path("/api/mangas");
                      }).error(function(data){
                        alert('error al inserta regrese otro dia');
                      });
      
                    }*/

                    $scope.insertar = function(){
                      //console.log($scope.manga);
                      insertarManga;                        
    
                     }

                }

})();