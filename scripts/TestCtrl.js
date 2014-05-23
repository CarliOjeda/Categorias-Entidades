angular.module('rutasApp')
.controller('TestCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
	$http.get(servidor + 'test/')
	.success(function(datos){
		$scope.Tests = datos;
	}); 
	
	$scope.TestNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;
 
	$scope.saveNewMateria = function(){


		$http.post(servidor + 'categorias/', $.param($scope.cateNueva) )
		.success(function(r){
			console.log('Materia guardada.');
			console.log(r);
			$scope.Categorias.push(r);
		}).error(function(r){
			console.log('No se creó la materia.');
			console.log(r);
		});
	} 

	$scope.editarCategoria = function(mater){
			$scope.editarTest = false;
			$scope.categoriaActual = alum;
	}

	$scope.eliminarCategoria = function(categoria, key) {
		$http.delete(servidor + 'categorias/' + categoria.id + '/').
				success(function () {
					console.log(key);
					console.log($scope.categorias);
					$scope.categorias.splice(key, 1);
				}).
				error(function () {
					console.log('No se pudo eliminar la categoria.')
				})
	}


	$scope.mostrarForm = function() {
		$scope.mostrando = true;
		$scope.btCrearMostrar = false;

		console.log("Se muestra! Joder! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar = true;
	}
}])
