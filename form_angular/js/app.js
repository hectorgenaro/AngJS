
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
$scope.form = {};
$scope.guardar = function (valido) {
	if (!valido ) return
	console.log ("guardando")
}


}]);
