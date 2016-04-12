angular.module('myApp')
.controller('urlController', function ($interval, $scope, urlService){
	console.log("urlController");

	 var url = "/simple-service-webapp/webapi/myresource/getURLs";
	   // $http.get(url).success( function(response) {
	   //     $scope.urls = response;
	   //  });
	 
	 $scope.getMyData = function() {
	       // $http.get(url).success( function(response) {
	       //     $scope.urls = response;
	       //     console.log("URL: " + url + " called.");
	       //  });
	 }
	 urlService.fetchUrls(url).then(function(response){
	 		console.log(response);
	 		$scope.urls = response.data;
	 })
	  // $interval($scope.getMyData, 2000);
})