
var app = angular.module('portf',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when("/", {templateUrl: "partials/index.html", controller: "pageCtrl"})
		.when("/about", {templateUrl: "partials/about.html", controller: "pageCtrl"})
		.when("/code", {templateUrl: "partials/code.html", controller: "pageCtrl"})
		.when("/contact", {templateUrl: "partials/contact.html", controller: "pageCtrl"})
		.when("/hire", {templateUrl: "partials/hireme.html", controller: "pageCtrl"})
		.otherwise("/404", {templateUrl: "partials/404.html", controller: "pageCtrl"});
}]);

app.controller('pageCtrl', function($scope, $http){

});
