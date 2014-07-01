var app = angular.module('treinos', []);

app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.factory('treinosService', function ($rootScope, $http) {

    return {

        create: function (treino) {
          console.log("Registrando "+ JSON.stringify(treino));

          return $http.post('/treino', treino)
          .success(function(data) {
            console.log(data);
            window.location = data;
          });
        },

        delete: function() {
           // return $http.post('/');
        }
    };
});

app.controller('treinosController', function($scope, treinosService) {

  $scope.treino;
	$scope.exercicios = [];
	$scope.series = [];

	$scope.registrarTreino = function() {

		var data = $scope.data;
		//var type = $scope.type;

		var treinoJSON = {
		    data:data,
			  exercicios:$scope.exercicios
		};

		$scope.exercicios = [];

		console.log("treinoJSON a ser inserido: "+JSON.stringify(treinoJSON));

		$scope.treino = treinoJSON;

		console.log("treino depois de inserir: "+JSON.stringify($scope.treino));

    console.log("----registrando treino");
    treinosService.create($scope.treino);
	}

	$scope.salvarExercicio = function() {
		var nome = $scope.exercicio;

		var exercicioJSON = {
			nome:nome,
			series:$scope.series
		};

		$scope.series = [];

		console.log("exercicioJSON a ser inserido: "+JSON.stringify(exercicioJSON));

		$scope.exercicios.push(exercicioJSON);

		console.log("exercicios depois de inserir: "+JSON.stringify($scope.exercicios));

	}

	$scope.salvarSerie = function() {
		var carga = $scope.carga;
		var rep = $scope.repeticoes;
		var quantidade = $scope.quantidade;

		var serieJSON = {
			carga:carga,
			repeticoes:rep,
			quantidade:quantidade
		};

		console.log("SerieJSON a ser inserido: "+JSON.stringify(serieJSON));

		$scope.series.push(serieJSON);

		console.log("Series depois de inserir"+JSON.stringify($scope.series));
	}
});
