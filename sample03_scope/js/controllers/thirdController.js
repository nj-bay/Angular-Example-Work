app.controller("thirdController", function($scope) {
	
	$scope.food = '';

	$scope.favorites = [];

	$scope.addFood = function() {
		$scope.favorites.push($scope.food);
	};

});
