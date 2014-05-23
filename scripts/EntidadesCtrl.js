angular.module('rutasApp')
.controller('EntidadesCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
 
	$http.get(servidor + 'entidades/')
	.success(function(datos){ 
		$scope.EEntidades = datos;
	});   

	$scope.entidadNueva  = {};
	$scope.btCrearMostrar = true;
	$scope.mostrando = false;
 


	$scope.saveNewEntidad = function(){


		$http.post(servidor + 'entidades/', $.param($scope.EntidadNueva) )
		.success(function(r){
			console.log('Entidad guardado.');
			console.log(r);
			$scope.EEntidades.push(r);
		}).error(function(r){
			console.log('No se creó el Nivel.');
			console.log(r);
		});
	}

	$scope.editarNivel = function(mater){
			$scope.nivelActual = entidad;
			$scope.editarNivel = false;
	} 

	$scope.eliminarEntidad = function(entidad, key) {

		$http.delete(servidor + 'entidades/' + entidad.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.EEntidades);
				return $scope.EEntidades.splice(key, 1);
			}). 
			error(function () {
				return console.log('No se pudo eliminar el usuario.')
			})
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("Se muestra! Joder Si! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar = true;
	};

}])
