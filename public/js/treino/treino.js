var app = angular.module('treinos', []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.factory('treinosService', function ($rootScope, $http) {

    return {

        create: function (treino) {
          console.log("Registering "+ treino);

          return $http.post('/treino', treino)
          .success(function(data) {
            console.log(data);
          });
        },

        delete: function() {
           // return $http.post('/');
        }
    };
});

app.controller('treinosController', function($scope, treinosService) {

  $scope.registrarTreino = function() {
    console.log("----registrando treino");
    treinosService.create()
  }

});
