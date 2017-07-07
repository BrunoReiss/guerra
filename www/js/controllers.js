angular.module('starter')

.controller('ApresentacaoCtrl', function($scope, $state) {
  $scope.login = function() {
    $state.go('login');
  }
})



.controller('LoginCtrl', function($scope, $state) {
  $scope.instrucoes = function() {
    $state.go('instrucoes')
  }
})


.controller('InstrucoesCtrl', function($scope, $state) {
  $scope.opcoes = function() {
    $state.go('opcoes')
  }
})

//Menu Opções Controller
.controller('OpcoesCtrl', function($scope, $state) {
  $scope.capaRicardo = function() {
    $state.go('capaRicardo')
  }
  $scope.capaIgor = function() {
    $state.go('capaIgor')
  }
  $scope.opCivil = function() {
    $state.go('opCivil')
  }
})

//Opções Civil
.controller('OpCivilCtrl', function($scope, $state) {
  $scope.introRebel = function() {
    $state.go('introRebel')
  }
  $scope.introJournal = function() {
    $state.go('introJournal')
  }
})

//RICARDO (MILITARY)///////////////////////////////////////////////////////////

//Capa Ricardo
.controller('CapaRicardoCtrl', function($scope, $state){
  $scope.introRicardo = function() {
    $state.go('introRicardo')
  }
})
//Intro Ricardo
.controller('IntroRicardoCtrl', function($scope, $state){
  $scope.mapaRicardo = function() {
    $state.go('mapaRicardo')
  }
})

//Mapa Ricardo
.controller('MapaRicardoCtrl', function($scope, $state){
  $scope.ricardo1 = function() {
    $state.go('ricardo1')
  }
})


//Ricardo Situ 1 Controller
.controller('Ricardo1Ctrl', function($scope, $state) {
  $scope.ricardo2 = function() {
    $state.go('ricardo2')
  }
  $scope.ricardo3 = function() {
    $state.go('ricardo3')
  }
})

//Ricardo Situ 2 Controller
.controller('Ricardo2Ctrl', function($scope, $state){
  $scope.ricardo4 = function() {
    $state.go('ricardo4')
  }
  $scope.ricardo5 = function() {
    $state.go('ricardo5')
  }
})

//Ricardo Situ 3 Controller
.controller('Ricardo3Ctrl', function($scope, $state){
  $scope.ricardo6 = function() {
    $state.go('ricardo6')
  }
  $scope.ricardo7 = function() {
    $state.go('ricardo7')
  }
})

//Ricardo Situ 4 Controller
.controller('Ricardo4Ctrl', function($scope, $state){
  $scope.ricardo8 = function(){
    $state.go('ricardo8')
  }

  $scope.ricardo9 = function(){
    $state.go('ricardo9')
  }
})

//Ricardo Situ 5 Controller
.controller('Ricardo5Ctrl', function($scope, $state){
  $scope.ricardo10 = function(){
    $state.go('ricardo10')
  }

  $scope.ricardo11 = function(){
    $state.go('ricardo11')
  }
})


//Ricardo Situ 6 Controller
.controller('Ricardo6Ctrl', function($scope, $state){
  $scope.ricardo12 = function(){
    $state.go('ricardo12')
  }
  $scope.ricardo13 = function(){
    $state.go('ricardo13')
  }
})

//Ricardo Situ 7 Controller
.controller('Ricardo7Ctrl', function($scope, $state){
  $scope.ricardo14 = function(){
    $state.go('ricardo14')
  }
  $scope.ricardo15 = function(){
    $state.go('ricardo15')
  }
})

//Ricardo Situ 8 Controller
.controller('Ricardo8Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 9 Controller
.controller('Ricardo9Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 10 Controller
.controller('Ricardo10Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 11 Controller
.controller('Ricardo11Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 12 Controller
.controller('Ricardo12Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 13 Controller
.controller('Ricardo13Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 14 Controller
.controller('Ricardo14Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Ricardo Situ 15 Controller
.controller('Ricardo15Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//(INTELLIGENCE)////////////////////////////////////////////////////////

//Capa Igor
.controller('CapaIgorCtrl', function($scope, $state){
  $scope.introIgor = function() {
    $state.go('introIgor')
  }
})

//Intro Igor
.controller('IntroIgorCtrl', function($scope, $state){
  $scope.mapaIgor = function() {
    $state.go('mapaIgor')
  }
})

//Mapa Igor
.controller('MapaIgorCtrl', function($scope, $state){
  $scope.igor1 = function() {
    $state.go('igor1')
  }
})


//Igor Situ 1 Controller
.controller('Igor1Ctrl', function($scope, $state) {
  $scope.igor2 = function() {
    $state.go('igor2')
  }
  $scope.igor3 = function() {
    $state.go('igor3')
  }
})

//Igor Situ 2 Controller
.controller('Igor2Ctrl', function($scope, $state){
  $scope.igor4 = function() {
    $state.go('igor4')
  }
  $scope.igor5 = function() {
    $state.go('igor5')
  }
})

//Igor Situ 3 Controller
.controller('Igor3Ctrl', function($scope, $state){
  $scope.igor6 = function() {
    $state.go('igor6')
  }
  $scope.igor7 = function() {
    $state.go('igor7')
  }
})

//Igor Situ 4 Controller
.controller('Igor4Ctrl', function($scope, $state){
  $scope.igor8 = function(){
    $state.go('igor8')
  }

  $scope.igor9 = function(){
    $state.go('igor9')
  }
})

//Igor Situ 5 Controller
.controller('Igor5Ctrl', function($scope, $state){
  $scope.igor10 = function(){
    $state.go('igor10')
  }

  $scope.igor11 = function(){
    $state.go('igor11')
  }
})


//Igor Situ 6 Controller
.controller('Igor6Ctrl', function($scope, $state){
  $scope.igor12 = function(){
    $state.go('igor12')
  }
  $scope.igor13 = function(){
    $state.go('igor13')
  }
})

//Igor Situ 7 Controller
.controller('Igor7Ctrl', function($scope, $state){
  $scope.igor14 = function(){
    $state.go('igor14')
  }
  $scope.igor15 = function(){
    $state.go('igor15')
  }
})

//Igor Situ 8 Controller
.controller('Igor8Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 9 Controller
.controller('Igor9Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 10 Controller
.controller('Igor10Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 11 Controller
.controller('Igor11Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 12 Controller
.controller('Igor12Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 13 Controller
.controller('Igor13Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 14 Controller
.controller('Igor14Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//Igor Situ 15 Controller
.controller('Igor15Ctrl', function($scope, $state){
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
  $scope.opcoes = function(){
    $state.go('opcoes')
  }
})

//(CIVILIAN - REBEL)////////////////////////////////////////////////////////
//Intro Rebel
.controller('IntroRebelCtrl', function($scope, $state){

  })

//Mapa Rebel
.controller('MapaRebelCtrl', function($scope, $state){

})

//Rebel Situação 1
.controller('Rebel1Ctrl', function($scope, $state){

})

//(CIVILIAN - JOURNALIST)////////////////////////////////////////////////////////
//Intro Journal
.controller('IntroJournalCtrl', function($scope, $tate){

  })

//Mapa Journal
.controller('MapaJournalCtrl', function($scope, $state){

})

//Journal Situação 1
.controller('Journal1Ctrl', function($scope, $state){

})
