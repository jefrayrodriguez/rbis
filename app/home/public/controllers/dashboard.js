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



$scope.summary = {};
$scope.summary.chart = {};
$scope.summary.chart.sc = {};
$scope.summary.chart.sc.data = [];
$scope.summary.chart.sc.labels = [];
$scope.summary.chart.sc.colors = [];

$scope.summary.chart.st={};
$scope.summary.chart.st.data = [];
$scope.summary.chart.st.labels = [];
$scope.summary.chart.st.colors = [];

$scope.summary.surfacetype = {};
$scope.summary.surfacetypeCount= {};

$scope.colorST = function(t){
  return utilities.roads.ST[t].color;
}

$scope.colorSC =  function(c){
  return utilities.roads.SC[c].color;
};
$scope.getpercent = function(a,b){
    return utilities.getPercent(a,b);
}

$scope.formatToDecimal =  function(d){
  return utilities.formatToDecimal(parseFloat("0" + d));
}
$scope.init =  function(){
    $http.get("/api/roads/getroadlengthtotal").success(function(d){
      console.log(utilities.formatToDecimal(Math.ceil(d.Roadlengthtotal)));
        $scope.summary.roadlengthtotal = utilities.formatToDecimal(Math.ceil(d.Roadlengthtotal));
    });
    
    $http.get("/api/roads/getbridgelengthtotal").success(function(d){
        $scope.summary.totalbridgelength = utilities.formatToDecimal(Math.ceil(d.totalbridgelength));
    });

    $http.get("/api/roads/getcarriagewaycount").success(function(d){
        $scope.summary.segmentcount = utilities.formatToDecimal(Math.ceil(d.segmentcount));
    });

    
    //chart    
    ///api/roads/getcarriagewaypersurfacecount
    $http.get("/api/roads/getcarriagewaypersurfacelength").success(function(d){
          $scope.summary.surfacetype = d;
          var _total = 0;          
          for(var n in d){
            if(n.indexOf("_id")==-1 && n!="total"){
                $scope.summary.chart.st.labels.push(n);
                $scope.summary.chart.st.data.push(d[n]);
                $scope.summary.surfacetype[n]= Math.round(parseFloat("0" + d[n]));
                _total+=$scope.summary.surfacetype[n];
                //console.log(n.toString().substring(0,1).toUpperCase());                
                var kcl = n.toString().substring(0,1).toUpperCase();
                var _colorHex = utilities.roads.ST[kcl].color;              
                $scope.summary.chart.st.colors.push(_colorHex);                
            };
          };
          $scope.summary.surfacetype.total = _total;
          //console.log($scope.summary.surfacetype);
    });
    
    $http.get("api/roads/getcarriagewaypersurfacecount").success(function(d){
          $scope.summary.surfacetypeCount = d;
          $scope.summary.surfacetypeCount.total = 0;
          var _total = 0;          
          for(var n in d){
            if(n.indexOf("_id")==-1 && n!="total"){                
                $scope.summary.surfacetypeCount[n]= Math.round(parseFloat("0" + d[n]));                                
                $scope.summary.surfacetypeCount.total+=$scope.summary.surfacetypeCount[n];
            };
          };
    });

   ///api/roads/getcarriagewayperconcount
    $http.get("/api/roads/getcarriagewayperconlength").success(function(d){
          $scope.summary.surfacecon = d;
          var _total = 0;    
          for(var n in d){
            if(n.indexOf("_id")==-1 && n!="total"){
                $scope.summary.surfacecon[n]= Math.round(parseFloat("0" + d[n]));
                _total+=$scope.summary.surfacecon[n]; 
                $scope.summary.chart.sc.labels.push(n);
                $scope.summary.chart.sc.data.push(d[n]);
                var kcl = n.toString().substring(0,1).toUpperCase();
                var _colorHex = utilities.roads.SC[kcl].color;              
                $scope.summary.chart.sc.colors.push(_colorHex);
            };
          };

          console.log($scope.summary.surfacecon);
         $scope.summary.surfacecon.total = _total;
    });


    $http.get("/api/roads/getcarriagewayperconcount").success(function(d){
        $scope.summary.surfaceconCount = d;
        $scope.summary.surfaceconCount.total = 0;
        for(var n in d){
            if(n!="_d" && n!="total"){
                $scope.summary.surfaceconCount[n]= Math.round(parseFloat("0" + d[n]));
                $scope.summary.surfaceconCount.total+=$scope.summary.surfaceconCount[n];
            };
        };
    });


};


});