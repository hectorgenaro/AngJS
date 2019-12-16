
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
$scope.mensaje = "Hola mundo!!"
$scope.mostrar_alerta = function(){
	Swal.fire($scope.mensaje);
}



}]);
