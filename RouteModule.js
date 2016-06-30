angular.module("RouteModule", []).constant("routeConstant",
{
	defaultRoutePath : '/login',
	routes : {
		'/login' : {
			url : '/login',
			templateUrl : '/assignment/views/login.html',
			controller : 'loginController',
			dependencies : ['/assignment/controllers/LoginController.js']
		}
	}
});