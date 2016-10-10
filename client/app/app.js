;(function () {
  var app = angular.module('LRCE', ['ngRoute', 'ui.bootstrap', 'ui.router'])

  // NgEnter Directive for inline editing of student information
  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind('keydown keypress', function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter)
          })
          event.preventDefault()
        }
      })
    }
  })

  app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/views/main.html'
      })
  })

  app.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        $rootScope.toState = toState
        $rootScope.toStateParams = toStateParams
      })
    }
  ])
})()
