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

  $scope.Edad_valid = false;
  $scope.$watch('Edad', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 2) {
      $scope.Edad_valid = true;
    } else {
      $scope.Edad_valid = false;
    }
  })

	$scope.ciudad_valid = false;
  $scope.$watch('ciudad', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 8) {
      $scope.ciudad_valid = true;
    } else {
      $scope.ciudad_valid = false;
    }
  })

  $scope.telefono_valid = false;
  $scope.$watch('telefono', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 10) {
      $scope.telefono_valid = true;
    } else {
      $scope.telefono_valid = false;
    }
  })
  $scope.rfc_valid = false;
  $scope.$watch('rfc', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 13) {
      $scope.rfc_valid = true;
    } else {
      $scope.rfc_valid = false;
    }
  })
  $scope.Ocupacion_valid = false;
  $scope.$watch('Ocupacion', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 10) {
      $scope.Ocupacion_valid = true;
    } else {
      $scope.Ocupacion_valid = false;
    }
  })
  $scope.Referencia_valid = false;
  $scope.$watch('Referencia', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 7) {
      $scope.Referencia_valid = true;
    } else {
      $scope.Referencia_valid = false;
    }
  })
  $scope.Escolaridad_valid = false;
  $scope.$watch('Escolaridad', function(nuevo, anterior) {
    if (!nuevo) return;
    if (nuevo.length < 7) {
      $scope.Escolaridad_valid = true;
    } else {
      $scope.Escolaridad_valid = false;
    }
  })
  // $scope.Homoclave_valid = false;
  // $scope.$watch('Homoclave', function(nuevo, anterior) {
  //   if (!nuevo) return;
  //   if (nuevo.length < 7) {
  //     $scope.Homoclave_valid = true;
  //   } else {
  //     $scope.Homoclave_valid = false;
  //   }
  // })


}]);
