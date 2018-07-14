const routes = ($routeProvider, $httpProvider, $locationProvider) => {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'views/program.html',
            controller: 'programController',
            controllerAs: 'vm'
        })
        .when('/pageProgram/:id' , {
            templateUrl: 'views/pageProgram.html',
            controller: 'pageProgramController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
};
