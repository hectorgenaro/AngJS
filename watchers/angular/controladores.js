var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {

	$scope.nombre = "Hector Rodriguez";
	$scope.$watch('nombre', function(valorNuevo, valorViejo){
		console.log(valorNuevo, valorViejo)
	})

}]);
