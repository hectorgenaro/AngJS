var app = angular.module('promesaApp.servicios', []);
app.factory('Personas', ['$http', '$q', function ($http, $q){

  var self =  {
    "cargando": false,
    "data":[{
      "Nombre": "Fernado",
      "Edad": 30
    }]
  };
  return self;

}])
