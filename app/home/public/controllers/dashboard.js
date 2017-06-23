angular.module('RBIS').controller("dashboardCtrl", function( $scope, $http,$rootScope,$window,$timeout,utilities) {


  $scope.events = [{
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'Road Update 11100000',
    content: 'Some awesome content.'
  }, {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Line segment update 111100000000',
    content: 'Content .'
  }
  , {
    badgeClass: 'warning',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Line segment update 111100000000',
    content: 'Content .'
  }
  , {
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'Line segment update 111100000000',
    content: 'Content .'
  }
  , {
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-check',
    title: 'Line segment update 111100000000',
    content: 'Content .'
  }
  , {
    badgeClass: 'info',
    badgeIconClass: 'glyphicon-credit-card',
    title: 'Line segment update 111100000000',
    content: 'Content .'
  }
  ];

$scope.init =  function(){

};


});