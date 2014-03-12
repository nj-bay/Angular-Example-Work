app.controller("firstController", function($scope) {

	$scope.pokemon_team = [
		{
			name: "Pigeot",
			type1: "Normal",
			type2: "Flying",
			image: "images/pigeot.jpg",
			id: 1
		},
		{
			name: "Zapdos",
			type1: "Electric",
			type2: "Flying",
			image: "images/zapdos.png",
			id: 2
		},
		{
			name: "Omastar",
			type1: "Water",
			type2: "Rock",
			image: "images/omanyte.gif",
			id: 3
		},
		{
			name: "Nidoking",
			type1: "Poison",
			type2: "Ground",
			image: "images/nidoking.jpg",
			id: 4
		},
		{
			name: "Lapras",
			type1: "Water",
			type2: "Ice",
			image: "images/lapras.png",
			id: 5
		},
		{
			name: "Venomoth",
			type1: "Bug",
			type2: "Poison",
			image: "images/venomoth.jpg",
			id: 6
		},				
	]

	$scope.fliersOnly = function() {
		$scope.searchText = "flying";
	};
});
