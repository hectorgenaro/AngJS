var app= angular.module('universidaApp', [ ])
app.controller('profesorCtrl', function($scope){
  $scope.profesor= profesorData;
  $scope.editando= {};
  $scope.editarProfesor= function () {
    
  }
})



var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}
