app.controller("myController", function($scope) {
	$scope.todo = '';
	$scope.list = ['Learn Angular'];

	$scope.addToList = function() {
		// console.log($scope.list);
		$scope.list.push($scope.todo);
		// console.log($scope.list);
	}
});
