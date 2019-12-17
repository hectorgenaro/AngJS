
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
$scope.form = {};
$scope.guardar = function () {
	console.log("guardando...")
}


}]);
