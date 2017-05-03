var app = angular.module("newsApp",[]);

app.controller("newsAppController",function($scope,$http){
	$scope.fetchNews= function(source) {
		$http.get("https://newsapi.org/v1/articles?source="+source+"&apiKey=57058996a2a54912a14de446d709ee9f")
		.then(function(response){			
			$scope.myArray=response.data;
		},
		function(response){
			console.log("error");
		});
	}
})