angular.module('rutasApp')
.controller('UsuariosCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
	$http.get(servidor + 'users/')
	.success(function(datos){
		$scope.Usuarios = datos;
		
	}); alert
	$scope.userNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;


	$scope.SaveNewUsuario = function(){


		$http.post(servidor + 'users/', $.param($scope.UsuarioNuevo) )
		.success(function(r){
			console.log('Usuario Guardado.');
			console.log(r);
			$scope.Usuarios.push(r);
		}).error(function(r){
			console.log('No se creó el usuario.');
			console.log(r);
		});

	}


	$scope.editUser = function(mater){
		
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}
	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar=true;
	}
	$scope.DeleteUsu = function (usuario, key) {
		$http.delete(servidor + 'users/' + usuario.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.usuarios);
				$scope.usuarios.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar el usuario.')
			})

	}
	$scope.editUser = function (usuario) {
		angular.copy(usuario, $scope.usuarios)
		console.log($scope.usuarios);
		$scope.GuardarNuevoUsuario = false;
		$location.hash('frmNewUser');

		};
	}
])	
//}])