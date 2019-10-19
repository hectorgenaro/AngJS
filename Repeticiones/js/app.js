(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){

$scope.listado = ["Fernando Herrera", "Melisa Flores", "Juan Carlos Pineda", "Maria Perez"]
$scope.planeta = ["Venus", "Tierra", "Jupiter", "Saturno", "Marte"]
$scope.paises = ["Mexico", "Canada", "USA", "Brazil","Colombia", "Venezuela"]
$scope.listadoProfesores = {
	profesores:[{
		nombre: "Fernando Herrera",
		edad: "29",
		clase: "PEE"
	},
	{
		nombre: "Melissa Flores",
		edad: "24",
		clase: "ICE"
	},
	{
		nombre: "Juan Carlos",
		edad: "42",
		clase: "M11O"
	}]
}

}]);





})();
