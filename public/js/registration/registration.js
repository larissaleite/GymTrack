var app = angular.module('gymTrack', []);

app.factory('registrationService', function ($rootScope, $http) {

    return {
        
        create: function (username, password) {
        	console.log("Registering "+ username + " - " + password);

           //return $http.post('/register', username, password);
        },

        delete: function(username) {
           // return $http.post('/');   
        },

        authenticate: function (username, password) {
          // return $http.get('/');
        }
    };
});

app.controller('registrationController', function($scope, registrationService) {

	$scope.registerUser = function() {
		registrationService.create($scope.usernameRegistration, $scope.passwordRegistration);
		//console.log("Registering "+ $scope.usernameRegistration + " - " + $scope.passwordRegistration);
	}

	$scope.checkUserCredentials = function () {
		registrationService.authenticate($scope.usernameLogin, $scope.passwordLogin);
	}

});
