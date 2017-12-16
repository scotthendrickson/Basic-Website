angular.module('routerApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: './template/home.html'
  })
  .state('about',{
    url: '/about',
    templateUrl: './template/about.html'
  })


})
