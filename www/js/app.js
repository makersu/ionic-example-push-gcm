// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaPush) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    //for android 
    //Project number
    var androidConfig = {
      "senderID": "477995012636",
    };

    $cordovaPush.register(androidConfig).then(function(result) {
      console.log('result=',result);
      alert('result= ' + result);
      // Success
    }, function(err) {
      console.log('err=',err);
      alert('err= ' + err);
      // Error
    })

    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      switch(notification.event) {
        case 'registered':
          if (notification.regid.length > 0 ) {
            console.log('registration ID = ' + notification.regid);
            alert('registration ID = ' + notification.regid);

          }
          break;

        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });


    // // WARNING: dangerous to unregister (results in loss of tokenID)
    // $cordovaPush.unregister(options).then(function(result) {
    //   // Success!
    // }, function(err) {
    //   // Error
    // })



  });
})
