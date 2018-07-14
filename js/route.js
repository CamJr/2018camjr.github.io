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
        .when('/team', {
          templateUrl: 'views/team.html',
          controller: 'teamController',
          controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController',
            controllerAs: 'vm'
        })
        .when('/store', {
            templateUrl: 'views/store.html'
                  })
        .otherwise({
            redirectTo: '/'
        });
};
