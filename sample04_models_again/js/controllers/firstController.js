app.controller("firstController", function($scope) {
	$scope.pokemon_1 = {
		name: "Pikachu",
		image: "images/pikachu.jpg",
		type1: "Electric",
		type2: "----",
		id: 1
	};

	$scope.pokemon_team = [
		$scope.pokemon_1,
		{
			name: "Gyarados",
			type1: "Water",
			type2: "Flying",
			id: 2
		},
		{
			name: "Charizard",
			type1: "Fire",
			type2: "Flying",
			id: 3
		}
	]

	console.log($scope.pokemon_team);
});
