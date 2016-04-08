angular.module('myApp')
.service('urlService', function($http){
	console.log(this);
	this.fetchUrls=function(url){
		return $http.get(url);
	}
});