// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('apresentacao', {
    url: '/apresentacao',
    templateUrl: '/templates/apresentacao.html',
    controller: 'ApresentacaoCtrl',
  })

  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginCtrl',
  })

  .state('historico', {
    url: '/historico',
    templateUrl: '/templates/historico.html',
    controller: 'HistoricoCtrl',
  })

  .state('inicio', {
    url: '/inicio',
    templateUrl: '/templates/inicio.html',
    controller: 'InicioCtrl',
  })

  .state('detalhes1', {
    url: '/detalhes1',
    templateUrl: '/templates/detalhes1.html',
    controller: 'Detalhes1Ctrl',
  })

  .state('missao', {
    url: '/missao',
    templateUrl: '/templates/missao.html',
    controller: 'MissaoCtrl',
  })

  .state('sucesso', {
    url: '/sucesso',
    templateUrl: '/templates/sucesso.html',
    controller: 'SucessoCtrl',
  })

  .state('fracasso', {
    url: '/fracasso',
    templateUrl: '/templates/fracasso.html',
    controller: 'FracassoCtrl',
  })


  .state('recuso', {
    url: '/recuso',
    templateUrl: '/templates/recuso.html',
    controller: 'RecusoCtrl',
  })

  .state('detalhes2', {
    url: '/detalhes2',
    templateUrl: '/templates/detalhes2.html',
    controller: 'Detalhes2Ctrl',
  })


  .state('missao2', {
    url: '/missao2',
    templateUrl: '/templates/missao2.html',
    controller: 'Missao2Ctrl',
  })


  .state('expulso', {
    url: '/expulso',
    templateUrl: '/templates/expulso.html',
    controller: 'ExpulsoCtrl',
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/apresentacao');
});
