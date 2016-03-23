angular
	.module('Igor')
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/components/login/login.html',
				controller: 'LoginController',
				controllerAs: 'lc'
			})
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'app/components/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'dc'
			})
			.state('classroom', {
				url: '/dashboard/:classroomId',
				templateUrl: 'app/components/classroom/classroom.html',
				controller: 'ClassroomController',
				controllerAs: 'cc'
			});
	});