angular.module('rutasApp', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate'
])
.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	
	// Para permitir el CORS
	$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


	$urlRouterProvider.otherwise('/')

	$stateProvider
		.state('categoria', {
			url: '/categoria',
			templateUrl: 'views/categorias.tpl.html',
			controller: 'CategoriasCtrl'
		})
		.state('level', {
			url: '/level',
			templateUrl: 'views/level.tpl.html',
			controller: 'LevelCtrl'
		})
		.state('entidades', {
			url:'/entidades',
			templateUrl: 'views/entidades.tpl.html',
			controller: 'EntidadesCtrl'
			
		})
		.state('preguntas', {
			url: '/preguntas',
			templateUrl: 'views/preguntas.tpl.html',
			controller: 'PreguntasCtrl'
		})	
		.state('test', {
			url: '/test',
			templateUrl: 'views/test.tpl.html',
			controller: 'TestCtrl'
		})
		.state('usuarios', {
			url: '/users',
			templateUrl: 'views/usuarios.tpl.html',
			controller: 'UsuariosCtrl'
		})
		.state('idiomas', {
			url: '/idiomas',
			templateUrl: 'views/idiomas.tpl.html',
			controller: 'IdiomasCtrl'
		})
		.state('inscripciones', {
			url: '/inscri',
			templateUrl: 'views/inscripciones.tpl.html',
			controller: 'InscripcionesCtrl'
		})
		.state('examen', {
			url: '/examen',
			templateUrl: 'views/examen.tpl.html',
			controller: 'ExamenCtrl'
		})
		.state('respuestas', {
			url: '/respuestas',
			templateUrl: 'views/respuestas.tpl.html',
			controller: 'RespuestasCtrl'
		})
		.state('bug', {
			url: '/bug',
			templateUrl: 'views/bug.tpl.html',
			controller: 'BugCtrl'
		});


}])