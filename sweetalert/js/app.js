
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
$scope.mensaje = "Hola mundo!!"
$scope.mensaje_titulo = "One line"
$scope.mensaje_subtitulo = "This is another line"
$scope.mostrar_alerta = function(){
	Swal.fire($scope.mensaje);
}
$scope.mostrar_subtitulo = function(){
	Swal.fire(
  $scope.mensaje_titulo,
  $scope.mensaje_subtitulo,
  'question'
)
}
$scope.mostrar_confirmacion = function(){
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, delete it!'
	}).then((result) => {
	  if (result.value) {
	    Swal.fire(
	      'Deleted!',
	      'Your file has been deleted.',
	      'success'
	    )
	  }
	})
}

}]);
