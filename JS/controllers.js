app.controller('MovieController', function($scope, $http){
  $scope.movies
  $scope.fetch = function(searchTerm) {
    console.log('im alive')
    $http.get("http://www.omdbapi.com/?s=" + searchTerm).then(function(data){
    $scope.movies = data.data.Search;
    console.log($scope.movies)
    });
  }
})

app.controller('ShowController', function ($scope, $http, $routeParams) {
  $scope.seeResults = {};
  $http.get("http://www.omdbapi.com/?i=" + $routeParams.id).then(function(data){
      $scope.seeResults = data.data;
      console.log('RESULTS = ', $scope.seeResults.Title)
    })
})
