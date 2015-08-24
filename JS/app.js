var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MovieController'
  })
  .when('/:id', {
    templateUrl: 'partials/show.html',
    controller: 'ShowController'
  })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})
