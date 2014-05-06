var app = angular.module('gymTrack', []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.factory('registrationService', function ($rootScope, $http) {

    return {
        
        create: function (username, password) {
        	console.log("Registering "+ username + " - " + password);

          var data = {
                'username': username,
                'password': password
                
            };

            console.log("Data " + data);
    
            return $http.post('/register', data)
            .success(function(data) {
                console.log(data);
            });
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
