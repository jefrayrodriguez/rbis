angular.module('RBIS').service('adapter', ['$window','$rootScope','utilities','$http',function ($window, $rootScope,utilities,$http){

var adapter = {};
adapter.data = [];
adapter.roadID = "";
adapter.init =  function(id){
    adapter.data = [];
    adapter.roadID = id;
};

adapter.getdata =  function(){
    return adapter.data;
};

adapter.processdata =  function(a,b,c){    
    var dx = adapter.data.map(function(d){return d.table}).indexOf(a.name);
    if(dx==-1){
            var d = {id:"",table:"",rows:[]};;
                    d.table = a.name;
                    d.rows.push({id:a.currentItem._id,key:b,value:c});
            adapter.data.push(d);
    }else{

            var table = adapter.data[dx];
            var rdx = table.rows.map(function(d){return d.id}).indexOf(a.currentItem._id);
            if(rdx==-1){
                        table.rows.push({id:a.currentItem._id,key:b,value:c});
            }else{
                    if(table.rows[rdx].key==b){
                            table.rows[rdx].value = c;
                    }else{
                           table.rows.push({id:a.currentItem._id,key:b,value:c}); 
                    }
            } 
            
    }     
    //console.log(adapter.data);
}



adapter.save = function(k){
    console.log(adapter.roadID);
 if(k && k.name!='road'){
        var dx = adapter.data.map(function(d){return d.table}).indexOf(k.name);
        var row =  adapter.data[dx];
        console.log(row);
 }else{
        console.log(adapter.data);
 }
};


return adapter;
}]);