var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MovieController'
  })
  .when('/:id', {
    templateUrl: 'partials/show.html',
    controller: 'ShowController'
  })
  // .when( '/:templatePath*', {
  //   templateUrl: 'partials/main.html',
  //   controller: 'MovieController'
  // })
})
