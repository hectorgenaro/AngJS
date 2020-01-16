var app = angular.module('promesaApp.servicios', []);
app.factory('Personas', ['$http', '$q', function ($http, $q){

  var self =  {
    "cargando": false,
    "data":[]
  };

  self.cargarData = function(){
    self.cargando = true;
    var q = $q.defer();
    console.log("funcion llamada")
    $http.jsonp("http://www.json-generator.com/api/json/get/coOCgLmSqa?callback=JSON_CALL")
      .then(function success(data){
        console.log ("todo bien")
        console.log(data)
      },
    function error(response){
      console.log("algo salio mal")
    })
  }
  self.cargarData()
  return self;

}])
