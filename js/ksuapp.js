var resolve = {  
  delay: function($q, $timeout) {  
    var delay = $q.defer();  
    $timeout(delay.resolve, 0, false);  
    return delay.promise;  
  }  
};

angular.module("angularapp", ['ngAnimate', 'ui.bootstrap', 'ngRoute'])
  .config(function ($routeProvider) {  
    $routeProvider  
      .when('/south-dakota', {  
        templateUrl: 'south-dakota.html',  
        resolve: resolve  
      })
      .when('/UTSA', {
        templateUrl: 'UTSA.html',
        resolve: resolve
      })
      .when('/LTech',{
        templateUrl: 'LTech.html',
        resolve: resolve
      })
      .when('/Oklahoma_St', {
        templateUrl: 'Oklahoma_St.html',
        resolve: resolve
      })
      .when('/TCU',{
        templateUrl: 'TCU.html',
        resolve: resolve
      })
      .when('/Oklahoma',{
        templateUrl: 'Oklahoma.html',
        resolve: resolve
      })
      .when('/Texas',{
        templateUrl: 'Texas.html',
        resolve: resolve
      })      
        .when('/Baylor',{
        templateUrl: 'Baylor.html',
        resolve: resolve
      })      
      .when('/Texas_Tech',{
        templateUrl: 'Texas_Tech.html',
        resolve: resolve
      })      
      .when('/Iowa_State',{
        templateUrl: 'Iowa_State.html',
        resolve: resolve
      })      
      .when('/Kansas',{
        templateUrl: 'Kansas.html',
        resolve: resolve
      })
      .when('/West_Virginia',{
        templateUrl: 'West_Virginia.html',
        resolve: resolve
      })
      .otherwise({
        redirectTo: '/south-dakota'
      });
  });


angular.module('angularapp').controller("KSUFootballController", function ($scope, $rootScope, $location, $route) {


  
  function GetDateAndDisplayCorrectGame(){
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate(); //day

    if(month < 9){ //months leading to september
      $location.path('/south-dakota');
    }
    else if(month == 9){ //september
      if(day <= 5){$location.path('/south-dakota');}
      else if(day > 5 && day <= 12){ $location.path('/UTSA');}
      else if(day > 12 && day <= 19){$location.path('/LTech'); }
      else{$location.path('/Oklahoma_St'); }
    }
    else if(month == 10){ //october
      if (day <= 3){$location.path('/Oklahoma_St');}
      else if(day > 3 && day <= 10){$location.path('/TCU');}
      else if( day > 10 && day <= 17){$location.path('/Oklahoma');}
      else if( day > 17 && day <= 24){$location.path('/Texas');}
      else{$location.path('/Baylor');}
    }
    else if( month == 11) //november
    {
      if(day <= 5){$location.path('/Baylor');}
      else if(day > 5 && day <= 14){$location.path('/Texas_Tech');}
      else if( day > 14 && day <= 21){ $location.path('/Iowa_State');}
      else if(day > 21 && day <= 28){$location.path('/Kansas');}
      else{$location.path('/West_Virginia');}
    }
    else if(month == 12){ //december
      if( day <= 5){$location.path('/West_Virginia');}
    }


  }

  GetDateAndDisplayCorrectGame();

});