
'use strict';
var tvApp = angular.module('tvApp', []);
tvApp.controller('tvListController', function tvListController($scope, $http) {
  $http({method: 'GET', url: 'tv-list.json'}).
  then(function success(response) {
      $scope.tvs=response.data.tvlist;
});

  $scope.delete = function ( idx ) {
    var tv_to_delete = $scope.persons[idx];
  
    API.DeletePerson({ id: tv_to_delete.id }, function (success) {
      $scope.tvs.splice(idx, 1);
    });
  };

});


/* $scope.remove = function(item) { 
  var index = $scope.tvs.indexOf(item);
  $scope.tvs.splice(index, 1);     
} */