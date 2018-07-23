
'use strict';
var tvApp = angular.module('tvApp', []);
tvApp.controller('tvListController', function tvListController($scope, $http) {
  $http({method: 'GET', url: 'tv-list.json'}).
  then(function success(response) {
      $scope.tvs=response.data.tvlist;
});
$scope.delete = function ( id ) {
  $scope.tvs = $scope.tvs.filter(item => item.id !== id);
};
});


/* $scope.remove = function(item) { 
  var index = $scope.tvs.indexOf(item);
  $scope.tvs.splice(index, 1);     
} */