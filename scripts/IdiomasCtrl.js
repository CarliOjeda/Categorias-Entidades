angular.module('rutasApp')
.controller('IdiomasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'idiomas/')
	.success(function(datos){
		$scope.Idiomas = datos;
		
	});
	$scope.IdiomaNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.SaveNewIdioma = function(){
			

		$http.post(servidor + 'idiomas/', $.param($scope.IdiomaNuevo) )
		.success(function(r){
			console.log('Eso guardado.');
			console.log(r);
			$scope.Idiomas.push(r);
			
		}).error(function(r){
			console.log('No se guardo nada.');
			console.log(r);
			
		});

	}


	$scope.editarCategoria = function(mater){
		
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar = true;
	}

	$scope.DeleteIdioma = function (idioma, key) {
		$http.delete(servidor + 'idiomas/' + idioma.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.idiomas);
				$scope.idiomas.splice(key, 1);
			}).
			error(function () {
				console.log('No se eliminó nada.')
			});

	}
	
	
}])