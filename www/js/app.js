// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngMap'])

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

//Apresentação
  .state('apresentacao', {
    url: '/apresentacao',
    templateUrl: '/templates/apresentacao.html',
    controller: 'ApresentacaoCtrl',
  })

//Login
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginCtrl',
  })

//Instruções
  .state('instrucoes', {
    url: '/instrucoes',
    templateUrl: '/templates/instrucoes.html',
    controller: 'InstrucoesCtrl',
  })

//Opções de história
  .state('opcoes', {
    url: '/opcoes',
    templateUrl: '/templates/opcoes.html',
    controller: 'OpcoesCtrl',
  })

//Opções Inteligência
  .state('opIntel', {
    url: '/opIntel',
    templateUrl: '/templates/opIntel.html',
    controller: 'OpIntelCtrl',
  })

//Opções Civil
.state('opCivil', {
  url: '/opCivil',
  templateUrl: '/templates/opCivil.html',
  controller: 'OpCivilCtrl',
})



//RICARDO (MILITARY)///////////////////////////////////////

//Capa Ricardo
.state('capaRicardo', {
  url: '/capaRicardo',
  templateUrl: '/templates/capaRicardo.html',
  controller: 'CapaRicardoCtrl',
})

//Intro Ricardo
  .state('introRicardo', {
    url: '/introRicardo',
    templateUrl: '/templates/introRicardo.html',
    controller: 'IntroRicardoCtrl',
  })

//Mapa Ricardo
  .state('mapaRicardo', {
    url: '/mapaRicardo',
    templateUrl: '/templates/mapaRicardo.html',
    controller: 'MapaRicardoCtrl',
  })

//Ricardo Situação 1 (situação inicial tensa)
  .state('ricardo1', {
    url: '/ricardo1',
    templateUrl: '/templates/ricardo1.html',
    controller: 'Ricardo1Ctrl',
  })

//Ricardo Situ 2 (violenta)
  .state('ricardo2', {
    url: '/ricardo2',
    templateUrl: '/templates/ricardo2.html',
    controller: 'Ricardo2Ctrl',
  })

//Ricardo Situ 3 (paz/inteligência)
  .state('ricardo3', {
    url: '/ricardo3',
    templateUrl: '/templates/ricardo3.html',
    controller: 'Ricardo3Ctrl',
  })

//Ricardo Situ 4
  .state('ricardo4', {
    url: '/ricardo4',
    templateUrl: '/templates/ricardo4.html',
    controller: 'Ricardo4Ctrl',
  })

//Ricardo Situ 5
  .state('ricardo5', {
    url: '/ricardo5',
    templateUrl: '/templates/ricardo5.html',
    controller: 'Ricardo5Ctrl',
  })

//Ricardo Situ 6
  .state('ricardo6', {
    url: '/ricardo6',
    templateUrl: '/templates/ricardo6.html',
    controller: 'Ricardo6Ctrl',
  })

//Ricardo Situ 7
  .state('ricardo7', {
    url: '/ricardo7',
    templateUrl: '/templates/ricardo7.html',
    controller: 'Ricardo7Ctrl',
  })

//Ricardo Situ 8
    .state('ricardo8', {
      url: '/ricardo8',
      templateUrl: '/templates/ricardo8.html',
      controller: 'Ricardo8Ctrl',
    })

//Ricardo Situ 9
    .state('ricardo9', {
      url: '/ricardo9',
      templateUrl: '/templates/ricardo9.html',
      controller: 'Ricardo9Ctrl',
    })

//Ricardo Situ 10
    .state('ricardo10', {
        url: '/ricardo10',
        templateUrl: '/templates/ricardo10.html',
        controller: 'Ricardo10Ctrl',
    })

//Ricardo Situ 11
    .state('ricardo11', {
      url: '/ricardo11',
      templateUrl: '/templates/ricardo11.html',
      controller: 'Ricardo11Ctrl',
    })

//Ricardo Situ 12
    .state('ricardo12', {
        url: '/ricardo12',
        templateUrl: '/templates/ricardo12.html',
        controller: 'Ricardo12Ctrl',
    })

//Ricardo Situ 13
    .state('ricardo13', {
      url: '/ricardo13',
      templateUrl: '/templates/ricardo13.html',
      controller: 'Ricardo13Ctrl',
    })

//Ricardo Situ 14
    .state('ricardo14', {
      url: '/ricardo14',
      templateUrl: '/templates/ricardo14.html',
      controller: 'Ricardo14Ctrl',
    })

//Ricardo Situ 15
    .state('ricardo15', {
      url: '/ricardo15',
      templateUrl: '/templates/ricardo15.html',
      controller: 'Ricardo15Ctrl',
    })

//IGOR (INTELLIGENCE)////////////////////////////////////////////////////////
//Intro Igor
  .state('introIgor', {
    url: '/introIgor',
    templateUrl: '/templates/introIgor.html',
    controller: 'IntroIgorCtrl',
  })

//Capa Igor
  .state('capaIgor', {
    url: '/capaIgor',
    templateUrl: '/templates/capaIgor.html',
    controller: 'CapaIgorCtrl',
  })

//Mapa Intel
  .state('mapaIgor', {
    url: '/mapaIgor',
    templateUrl: '/templates/mapaIgor.html',
    controller: 'MapaIgorCtrl',
  })

//Intel Situação 1 (situação inicial tensa)
  .state('igor1', {
    url: '/igor1',
    templateUrl: '/templates/igor1.html',
    controller: 'Igor1Ctrl',
  })

  //Igor Situ 2 (violenta)
    .state('igor2', {
      url: '/igor2',
      templateUrl: '/templates/igor2.html',
      controller: 'Igor2Ctrl',
    })

  //Igor Situ 3 (paz/inteligência)
    .state('igor3', {
      url: '/igor3',
      templateUrl: '/templates/igor3.html',
      controller: 'Igor3Ctrl',
    })

  //Igor Situ 4
    .state('igor4', {
      url: '/igor4',
      templateUrl: '/templates/igor4.html',
      controller: 'Igor4Ctrl',
    })

  //Igor Situ 5
    .state('igor5', {
      url: '/igor5',
      templateUrl: '/templates/igor5.html',
      controller: 'Igor5Ctrl',
    })

  //Igor Situ 6
    .state('igor6', {
      url: '/igor6',
      templateUrl: '/templates/igor6.html',
      controller: 'Igor6Ctrl',
    })

  //Igor Situ 7
    .state('igor7', {
      url: '/igor7',
      templateUrl: '/templates/igor7.html',
      controller: 'Igor7Ctrl',
    })

  //Igor Situ 8
      .state('igor8', {
        url: '/igor8',
        templateUrl: '/templates/igor8.html',
        controller: 'Igor8Ctrl',
      })

  //Igor Situ 9
      .state('igor9', {
        url: '/igor9',
        templateUrl: '/templates/igor9.html',
        controller: 'Igor9Ctrl',
      })

  //Igor Situ 10
      .state('igor10', {
          url: '/igor10',
          templateUrl: '/templates/igor10.html',
          controller: 'Igor10Ctrl',
      })

  //Igor Situ 11
      .state('igor11', {
        url: '/igor11',
        templateUrl: '/templates/igor11.html',
        controller: 'Igor11Ctrl',
      })

  //Igor Situ 12
      .state('igor12', {
          url: '/igor12',
          templateUrl: '/templates/igor12.html',
          controller: 'Igor12Ctrl',
      })

  //Igor Situ 13
      .state('igor13', {
        url: '/igor13',
        templateUrl: '/templates/igor13.html',
        controller: 'Igor13Ctrl',
      })

  //Igor Situ 14
      .state('igor14', {
        url: '/igor14',
        templateUrl: '/templates/igor14.html',
        controller: 'Igor14Ctrl',
      })

  //Igor Situ 15
      .state('igor15', {
        url: '/igor15',
        templateUrl: '/templates/igor15.html',
        controller: 'Igor15Ctrl',
      })

//Igor HACKER/////////////////////////////////////////////////////////
//Capa HACKER
  .state('capaHacker', {
    url: '/capaHacker',
    templateUrl: '/templates/capaHacker.html',
    controller: 'CapaHackerCtrl',
  })

//Intro HACKER
    .state('introHacker', {
      url: '/introHacker',
      templateUrl: '/templates/introHacker.html',
      controller: 'IntroHackerCtrl',
    })

    //Mapa HACKER
        .state('mapaHacker', {
          url: '/mapaHacker',
          templateUrl: '/templates/mapaHacker.html',
          controller: 'MapaHackerCtrl',
        })

        //HACKER Situ 1
            .state('hacker1', {
              url: '/hacker1',
              templateUrl: '/templates/hacker1.html',
              controller: 'Hacker1Ctrl',
            })

                //HACKER Situ 2
                    .state('hacker2', {
                      url: '/hacker2',
                      templateUrl: '/templates/hacker2.html',
                      controller: 'Hacker2Ctrl',
                    })

                    //HACKER Situ 3
                        .state('hacker3', {
                          url: '/hacker3',
                          templateUrl: '/templates/hacker3.html',
                          controller: 'Hacker3Ctrl',
                        })

                        //HACKER Situ 4
                            .state('hacker4', {
                              url: '/hacker4',
                              templateUrl: '/templates/hacker4.html',
                              controller: 'Hacker4Ctrl',
                            })

                            //HACKER Situ 5
                                .state('hacker5', {
                                  url: '/hacker5',
                                  templateUrl: '/templates/hacker5.html',
                                  controller: 'Hacker5Ctrl',
                                })

//REBEL/////////////////////////////////////////////////////////////////////////
//Capa REBEL
.state('capaRebel', {
  url: '/capaRebel',
  templateUrl: '/templates/capaRebel.html',
  controller: 'CapaRebelCtrl',
})

//Intro REBEL
.state('introRebel', {
  url: '/introRebel',
  templateUrl: '/templates/introRebel.html',
  controller: 'IntroRebelCtrl',
})

//JOURNALIST////////////////////////////////////////////////////////////////////
//Capa JOURNALIST
.state('capaJornal', {
  url: '/capaJornal',
  templateUrl: '/templates/capaJornal.html',
  controller: 'CapaJornalCtrl',
})

//Intro JOURNALIST
.state('introJornal', {
  url: '/introJornal',
  templateUrl: '/templates/introJornal.html',
  controller: 'IntroJornalCtrl',
})

//Mapa JOURNALIST
.state('mapaJornal', {
  url: '/mapaJornal',
  templateUrl: '/templates/mapaJornal.html',
  controller: 'MapaJornalCtrl'
})

//Situ 1 JOURNALIST
.state('jornal1', {
  url: '/jornal1',
  templateUrl: '/templates/jornal1.html',
  controller: 'Jornal1Ctrl',
})





  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/apresentacao');
});
