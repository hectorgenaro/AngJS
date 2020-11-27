
var app = angular.module('bonusApp',['jcs-autoValidate' ]);

app.controller('mainCtrl', ['$scope', function($scope){

	angular.module('bonusApp')
			.run([
			'defaultErrorMessageResolver',
			function (defaultErrorMessageResolver) {
					// passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
					// otherwise the current default culture is returned.
					defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
						errorMessages['edadMinima'] = 'Debe ser mayor a {0} años';
						errorMessages['edadMaxima'] = 'Debe ser menor a {0} años';
					});
			}
	]);
	$scope.formData = {};


	$scope.guardar_datos = function(  ){
		console.log("Posteando...");
		}




}]);
