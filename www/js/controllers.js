angular.module('starter')

.controller('ApresentacaoCtrl', function($scope, $state) {
  $scope.login = function() {
    $state.go('login');
  }
})



.controller('LoginCtrl', function($scope, $state) {
  $scope.historico = function() {
    $state.go('historico')
  }
})


.controller('HistoricoCtrl', function($scope, $state) {
  $scope.inicio = function() {
    $state.go('inicio')
  }
})


.controller('InicioCtrl', function($scope, $state) {
  $scope.detalhes1 = function() {
    $state.go('detalhes1')
  }
})

.controller('Detalhes1Ctrl', function($scope, $state){
  $scope.missao = function() {
    $state.go('missao')
  }

  $scope.recuso = function() {
    $state.go('recuso')
  }
})



.controller('MissaoCtrl', function($scope, $state){
  $scope.sucesso = function() {
    $state.go('sucesso')
  }

  $scope.fracasso = function() {
    $state.go('fracasso')
  }
})



.controller('SucessoCtrl', function($scope, $state) {
  $scope.historico = function() {
    $state.go('historico')
  }
})


.controller('FracassoCtrl', function($scope, $state){
  $scope.inicio = function() {
    $state.go('inicio')
}
})

.controller('Missao2Ctrl', function($scope, $state){

})


.controller('Detalhes2Ctrl', function($scope, $state){
  $scope.missao2 = function(){
    $state.go('missao2')
  }

  $scope.expulso = function(){
    $state.go('expulso')
  }

})



.controller('RecusoCtrl', function($scope, $state){
  $scope.detalhes2 = function(){
    $state.go('detalhes2')
  }
})


.controller('ExpulsoCtrl', function($scope, $state){
  $scope.historico = function(){
    $state.go('historico')
  }

});
