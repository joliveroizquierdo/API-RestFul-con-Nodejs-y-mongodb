(function () {
  'use strict';
    
    angular.module('appControllers', ['appServices'])
           .controller('ListarCtrl', ListarMangas);
    
                function ListarMangas($scope, Mangas){

                    Mangas.success(function(data){
                        
                        $scope.listado = data;
                       //console.log(data);

                    }).error(function(error){
                            alert(error);
                    });
                    
    
                }

})();