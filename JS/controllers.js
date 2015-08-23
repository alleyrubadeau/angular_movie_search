app.controller('MovieController', function($scope, $http){
  $scope.movies
  $scope.fetch = function(searchTerm) {
    console.log('im alive')
    $http.get("http://www.omdbapi.com/?s=" + searchTerm).then(function(data){
    $scope.movies = data.data.Search;
    console.log($scope.movies)
});

    // var pendingTask;
    // if($scope.search === undefined){
    //   $scope.search = search
    //   fetch();
    // }
  }
  })

  // app.controller('MovieController', function($scope, $http) {
  //   function fetchId () {
  //   $http.get("http://www.omdbapi.com/?i=").then(function(data){
  //       $scope.search = data.data;
  //   });
  //   var pendingTask;
  //   if($scope.search === undefined){
  //     $scope.search = search
  //     fetch();
  //   }
  // }
  // })
