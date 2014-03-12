app.controller("firstController", function($scope) {
	$scope.alertHello = function() {
		alert("Hello");
		$scope.aboutThisButton = "This button says 'hello'."
		console.log($scope);
	};
});
