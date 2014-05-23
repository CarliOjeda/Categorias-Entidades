angular.module('rutasApp')
.controller('LevelCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
 
	$http.get(servidor + 'niveles/')
	.success(function(datos){
		$scope.NNiveles = datos;
	});   

	$scope.nivelNuevo  = {};
	$scope.btCrearMostrar = true;
	$scope.mostrarForm = false;
 


	$scope.saveNewNivel = function(){


		$http.post(servidor + 'niveles/', $.param($scope.nivelNueva) )
		.success(function(r){
			console.log('Nivel guardado.');
			console.log(r);
			$scope.NNiveles.push(r);
		}).error(function(r){
			console.log('No se creó el Nivel.');
			console.log(r);
		});
	}

	$scope.editarNivel = function(mater){
			$scope.nivelActual = nivel;
			$scope.editarNivel = false;
	}

	$scope.eliminarNivel = function (nivel, key) {

		$http.delete(servidor + 'niveles/' + nivel.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.NNiveles);
				$scope.NNiveles.splice(key, 1);
			}). 
			error(function () {
				console.log('No se pudo eliminar el usuario.')
			})
	}

	$scope.mostrar = function() {
		$scope.mostrarForm = true; 
		$scope.btCrearMostrar = false;
		console.log("Se muestra! Joder Si! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrarForm=false; 
		$scope.btCrearMostrar=true;
	};

}])
