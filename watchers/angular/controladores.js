var app = angular.module('paginacionApp.controladores', []);

app.controller('observadorCtrl', ['$scope', function($scope) {

  // $scope.nombre = "Hector Rodriguez";
  $scope.nomInco = false;

  $scope.$watch('nombre', function(valorNuevo, valorViejo) {
    if (!valorNuevo) return;
    if (valorNuevo.length < 5) {
      $scope.nomIncop = true;
    } else {
      $scope.nomIncop = false;
    }
    // console.log(valorNuevo, valorViejo)
  })

  $scope.curp_valid = false;
  $scope.$watch('curp', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 16) {
      $scope.curp_valid = true;
    } else {
      $scope.curp_valid = false;
    }
  })


}]);
