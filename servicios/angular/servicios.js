var app = angular.module('promesaApp.servicios', []);
app.factory('Personas', ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {

  var self = {
    "cargando": false,
    "mensaje": "",
    "data": []
  };

  self.cargarData = function() {
    self.cargando = true;
    var q = $q.defer();
    $http.jsonp("http://www.json-generator.com/api/json/get/cflPmSUZMy?callback=JSON_CALLBACK")
      .then(function success(respuesta) {
          q.resolve(respuesta.data)
        },
        function error(response) {
          console.log("algo inesperado ocurrio")
          q.reject("error al cargar")
        })
    return q.promise
  }

  $rootScope.promise = self.cargarData()
  $rootScope.promise.then(
    function(data) {
      self.data = data;
      self.mensaje = "datos cargados correctamente"
      self.cargando = false;
    },
    function(error) {
      console.error(error);
      self.cargando = false;
      self.mensaje = "ocurrio un error al cargar los datos"
    });
  return self;

}])
