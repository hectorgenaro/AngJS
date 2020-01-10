var app = angular.module('promesaApp.controladores', [])
app.controller('mainCtrl', ['$scope','$q', function($scope, $q){

  $scope.miVar = 0;
  console.log("todo ok")

  $scope.sumar= function (num){
    var q = $q.defer();
    var valido = true;
    num++;
    if(valido){
      q.resolve(num)
    }else{
      q.reject('no se sumar')
    }
    return q.promise;
  }

  $scope.promise = $scope.sumar(1);
  $scope.promise.then (
    function (valor){
      console.log("promesa cumplida")
      $scope.miVar= valor;
    },
    function() {
      console.error(error);
  })


}])
