angular.module('movieDBControllers',[])
.controller('MovieListController',function($scope,MovieListService) {
// set scope with first and last names
   var url = "https://api.themoviedb.org/3/movie/popular?api_key=35e16679c616a21b9ddebb66272c5902";
   $scope.movieList = [];
   

   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results;  

      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
});
