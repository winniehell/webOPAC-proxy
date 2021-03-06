var module = angular.module('webOPAC-proxy')

module.config(configureRoutes)

configureRoutes.$inject = [
  '$urlRouterProvider',
  '$stateProvider',
  '$locationProvider'
]

function configureRoutes ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true)

  $stateProvider
    .state('search', {
      url: '/search',
      template: '<search-field></search-field>'
    })

  $urlRouterProvider.otherwise('/search')
}
