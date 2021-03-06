'use strict';

angular.module('ebolaCallCenterApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/cases/new.html'
      }).when('/cases/', {
        templateUrl: 'app/cases/index.html',
        controller: 'CaseCtrl',
        resolve: {
          cases: function($http) {
            return $http.get('/api/cases').then(function(response) {
              return response.data;
            });
          }
        }
      }).otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
