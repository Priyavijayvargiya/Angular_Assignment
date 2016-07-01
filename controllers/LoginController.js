
app.controller("loginControllor", function($scope, $location, $rootScope) {
	$scope.login = function() {
		if($scope.loginForm.$valid){
			$rootScope.loggedInEmail = $scope.email;
			$location.path("/home");
		}
		else
		 $location.path("/login");
		
	};
	$scope.registration = function() {
		$location.path("/registration")
	}
});