var app = angular.module("myApp",['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
		   templateUrl: 'views/login.html',
		   controller:'loginControllor'
		}).
		when('/home', {
		   templateUrl: 'views/home.html'
		}).
		when('/registration', {
		   templateUrl: 'views/registration.html'
		})
}]);