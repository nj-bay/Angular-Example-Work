// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("MovieApp", ['ngResource']);

// Create and register the new "instagram" service
app.factory('movies', function($resource){

	return {
		fetchMovie: function(query, callback){
			var movie_title = query;

			// The ngResource module gives us the $resource service. It makes working with
			// AJAX easy. Here I am using the client_id of a test app. Replace it with yours.

			var api = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=:key&q=:title&page_limit=:limit&callback=JSON_CALLBACK',{
				key: "88a8qpv9kwg657jxb97ma5nn",
				title: "Batman",
				limit: "1"
			},{
				// This creates an action which we've chosen to name "fetch". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.

				fetch:{method:'JSONP'}
			});

			api.fetch({title: movie_title}, function(response){

				// Call the supplied callback function
				callback(response);

			});
		}
	}

});

// The controller. Notice that I've included our instagram service which we
// defined below. It will be available inside the function automatically.

function MovieController($scope, movies){
	$scope.title = '';

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.

	$scope.search = function() {
		var query = $scope.title;
		// Use the instagram service and fetch a list of the popular pics
		movies.fetchMovie(query, function(data){
			console.log(data);

			// Assigning the pics array will cause the view
			// to be automatically redrawn by Angular.
			$scope.pics = data;
		});
		movies.fetchInTheaters(function(data){
			console.log(data);
		})
	};

}
