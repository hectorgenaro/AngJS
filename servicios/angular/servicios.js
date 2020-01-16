var app = angular.module('promesaApp.servicios', []);
app.factory('Personas', ['$http', '$q', function ($http, $q){

  var self =  {
    "cargando": false,
    "data":[]
  };

  self.cargarData = function(){
    self.cargando = true;
    var q = $q.defer();
    $http.jsonp("http://www.json-generator.com/api/json/get/cflPmSUZMy?callback=JSON_CALLBACK")
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
