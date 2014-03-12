app.controller("secondController", function($scope) {
	$scope.alertGoodbye = function() {
		alert("Goodbye");
		$scope.aboutThisButton = "This button says 'goodbye'."
		console.log($scope);
	};
});
