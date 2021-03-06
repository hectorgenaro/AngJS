var app = angular.module('universidaApp', [])
app.controller('profesorCtrl', function($scope) {
  $scope.profesor = profesorData;
  $scope.editando = {};
  $scope.mostrarCaja = false;
  $scope.contador = 0;


  $scope.editarProfesor = function() {
    angular.copy($scope.profesor, $scope.editando)
    $scope.mostrarCaja = true;
    $scope.contador = $scope.contador + 1;
    console.log($scope.contador)
    if ($scope.contador % 2 === 0 && $scope.mostrarCaja == true ) {
      $scope.mostrarCaja = false;
       console.log($scope.mostrarCaja)
    } 
  }


  $scope.guardarCambios = function() {
    angular.copy($scope.editando, $scope.profesor)
    $scope.mostrarCaja = false;
  }

  $scope.cancelarCambios = function() {
    $scope.editando = {};
    $scope.mostrarCaja = false;
  }
});

var profesorData = {
  nombre: "Juan Carlos Pineda",
  bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
  edad: 47,
  foto: "img/juancarlos.jpg"
}
