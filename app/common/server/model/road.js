'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
   _ = require('lodash');

var mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const ROAD_ATTR_DET = ["RoadBridges", 
                    "RoadCarriageway", 
                    "RoadCauseways", 
                    "RoadCulverts", 
                    "RoadDitches", 
                    "RoadGuardrails", 
                    "RoadHazards",
                    "RoadJunctions", 
                    "RoadLightings", 
                    "RoadLocRefPoints", 
                    "RoadMarkings",
                    "RoadMedian", 
                    "RoadPlaceNames", 
                    "RoadShoulders", 
                    "RoadSideFriction", 
                    "RoadSideSlopes", 
                    "RoadSideWalks",
                    "RoadSigns", 
                    "RoadSpillways", 
                    "RoadStructures"]

const ROAD_MODEL_STRUC = {      
    "RegionCode" : String, 
    "ProvinceCo" : String, 
    "CityMunCod" : String, 
    "R_ID" : String, 
    "R_NAME" : String, 
    "R_CLASS" : String, 
    "R_Importan" : String, 
    "Environmen" : String, 
    "RROW" : Number, 
    "RROWAcquir" : String, 
    "DirFlow" : String, 
    "Terrain" : String, 
    "Length" : Number, 
    "oldid" : String, 
    "RROW_acq_date": Date,
    "RROW_acq_cost":Number,
    "RROW_usefullife":Number,
    "remarks":String,
    "RoadBridges" : [Schema.Types.Mixed], 
    "RoadCarriageway" : [Schema.Types.Mixed], 
    "RoadCauseways" : [Schema.Types.Mixed], 
    "RoadCulverts" : [Schema.Types.Mixed], 
    "RoadDitches" : [Schema.Types.Mixed], 
    "RoadGuardrails" : [Schema.Types.Mixed], 
    "RoadHazards" : [Schema.Types.Mixed], 
    "RoadJunctions" : [Schema.Types.Mixed], 
    "RoadLightings" : [Schema.Types.Mixed], 
    "RoadLocRefPoints" : [Schema.Types.Mixed], 
    "RoadMarkings" : [Schema.Types.Mixed], 
    "RoadMedian" : [Schema.Types.Mixed], 
    "RoadPlaceNames" : [Schema.Types.Mixed], 
    "RoadShoulders" : [Schema.Types.Mixed], 
    "RoadSideFriction" : [Schema.Types.Mixed], 
    "RoadSideSlopes" : [Schema.Types.Mixed], 
    "RoadSideWalks" : [Schema.Types.Mixed], 
    "RoadSigns" : [Schema.Types.Mixed], 
    "RoadSpillways" : [Schema.Types.Mixed], 
    "RoadStructures" : [Schema.Types.Mixed], 
    "geometry" : Schema.Types.Mixed
}
const RoadsSchema = new Schema(ROAD_MODEL_STRUC,{ collection: 'Roads' });
RoadsSchema.set('toJSON', { getters: true, virtuals: true });

RoadsSchema.statics.getprovroadshortinfo =  function(code,cb){
    this.find({ProvinceCo:code,R_CLASS:'Provincial'})
        .select("R_ID R_NAME R_CLASS R_Importan Environmen RROW RROWAcquir DirFlow Terrain Length")
        .exec(function(err,docs){
        if(err){cb(err,null);return;}
        var _tree_roads = [];        
        /*
        ocs.forEach(function(attr){
            console.log(attr);
            var _attr = {};                
            _tree_roads.push(_attr);
        })
        */
        return cb(null,docs);
    });

}


RoadsSchema.statics.getcitymunroadshortinfo =  function(code,cb){
    this.find({CityMunCod:code,R_CLASS:'City'})
        .select("R_ID R_NAME R_CLASS R_Importan Environmen RROW RROWAcquir DirFlow Terrain Length")
        .exec(function(err,docs){
        if(err){cb(err,null);return;}               
        return cb(null,docs);
    });

}

RoadsSchema.statics.getroadattrinfo =  function(rid,cb){
    this.findOne({R_ID:rid})        
        .exec(cb);

};

RoadsSchema.statics.getroadshortattrinfo =  function(rid,cb){
    this.findOne({R_ID:rid}).exec(function(err,data){
            var _row = {};
            for( var key in ROAD_MODEL_STRUC){
                if(ROAD_ATTR_DET.indexOf(key)>-1){
                    var a = key + "_length";
                    _row[a] = data[key].length;
                }else{
                    _row[key] = data[key];
                }
            }

            cb(err,_row);
    });
}

RoadsSchema.statics.getroadattr =  function(rid,attr,cb){
    this.findOne({R_ID:rid}).exec(function(err,data){
        cb(err,data[attr]);
    })
}

RoadsSchema.statics.getroadaggmain =  function(qryStr,page,limit,cb){    
    var rname = new RegExp(qryStr,'i'),rid = new RegExp(qryStr,'i'); 
    var matchOR = {$match: {$or:[{"R_NAME":rname},{"R_ID":rid}]}};
    var qry = qryStr==""?{}:matchOR;    
    /*
    var aggregate = [
                {
                    $project: { 
                        R_ID: 1,
                        SegmentID:1,
                        R_NAME:1,
                        R_CLASS:1,            
                        bridgecount: { $size: "$RoadBridges" },
                        segmentcount:{$size:"$RoadCarriageway"},     
                        roadlengths:"$RoadCarriageway.SegmentLen"            
                    }       
                },{$unwind: "$roadlengths"},
                    {$group:{
                            _id:{_id:"$_id",R_ID:"$R_ID",R_NAME:"$R_NAME",R_CLASS:"$R_CLASS",segmentcount:"$segmentcount",SegmentID:"$SegmentID",bridgecount:"$bridgecount",segmentcount:"$segmentcount"},
                            roadlengths: {$sum:"$roadlengths"}
                            }
                    }
            ];
    */
    var aggregate = this.aggregate();
       if(qryStr!=""){aggregate.match({$or:[{"R_NAME":rname},{"R_ID":rid}]});}
        aggregate.project({ 
                        R_ID: 1,
                        SegmentID:1,
                        R_NAME:1,
                        R_CLASS:1,            
                        bridgecount: { $size: "$RoadBridges" },
                        segmentcount:{$size:"$RoadCarriageway"},     
                        roadlengths:"$RoadCarriageway.SegmentLen"            
        })
        .unwind("$roadlengths")
        .group({_id:{_id:"$_id",R_ID:"$R_ID",R_NAME:"$R_NAME",R_CLASS:"$R_CLASS",segmentcount:"$segmentcount",SegmentID:"$SegmentID",bridgecount:"$bridgecount",segmentcount:"$segmentcount"},
                    roadlengths: {$sum:"$roadlengths"}
                });

    var options = { page : page, limit : limit};        
    this.aggregatePaginate(aggregate, options, function(err, results, pageCount, count) {
        if(err) 
        {
           cb({err:"error processing data"},null);
        }
        else
        { 
            cb(null,{data:results,pagecount:pageCount,count:count})
        }
    });
    
};


RoadsSchema.statics.getroadlengthtotal =  function(cb){
    this.aggregate([{$group: {_id:'',Roadlengthtotal: { $sum: '$Length' }}},
                    {$project: {_id: 0,Roadlengthtotal: '$Roadlengthtotal'}}],cb)
};


RoadsSchema.statics.getbridgelengthtotal = function(cb){
    this.aggregate([					
					{
                    '$project': {
                      				_id:{'_id':'$_id'},                         			
                        			totalbridgelength: '$RoadBridges.Length'
                        		}       
                	},
                	{'$unwind':'$totalbridgelength'},
                	{'$group':{
                				_id:'',
                				totalbridgelength: {$sum:'$totalbridgelength'}
                			 }
                	},
                		{'$project':{
                		_id:0,
                		totalbridgelength: '$totalbridgelength'
                		}
                	}	
                ],cb)
}


RoadsSchema.statics.getcarriagewayperconcount =  function(qry,cb){    
    var _agg = [{$group: { '_id': '$RoadCarriageway.SegmentCon', 'SegmentCon': { $push: '$RoadCarriageway.SegmentCon'}}},
					{'$project':{_id:1,'SegmentCon':'$SegmentCon'}
					},
					{'$unwind':'$_id'},
					{'$project':
					  			{
								'Good':{'$cond':[{'$eq':['G','$_id']},1,0]},
								'Poor':{'$cond':[{'$eq':['P','$_id']},1,0]},
								'Fair':{'$cond':[{'$eq':['F','$_id']},1,0]},
								'New':{'$cond':[{'$eq':['N','$_id']},1,0]},
								'Bad':{'$cond':[{'$eq':['B','$_id']},1,0]}
								}
					},
					{ '$group': {
        						'_id': '',
        						'Poor': { '$sum': '$Poor' },
        						'Good': { '$sum': '$Good' },
        						'Fair': { '$sum': '$Fair' },
        						'New': { '$sum': '$New' },
        						'Bad': { '$sum': '$Bad' },        						
        						 'total': { '$sum': 1 }
    				}}					
					];


    if(qry){_agg.unshift.qry}                    
    this.aggregate(_agg,cb)
}

RoadsSchema.statics.getcarriagewaypersurfacelength =  function(qry,cb){
    var _agg = [{ '$unwind': '$RoadCarriageway' },
                            { '$group': {
                                            '_id': '$_id',
                                            'Asphalt': {
                                                            '$sum': {
                                                                    '$cond': [{ '$eq': [ '$RoadCarriageway.SurfaceTyp', 'A' ] },'$RoadCarriageway.SegmentLen',0]
                                                                    }
                                                            },
                                            'Concrete': {
                                                            '$sum': {
                                                                    '$cond': [{ '$eq': [ '$RoadCarriageway.SurfaceTyp', 'C' ] },'$RoadCarriageway.SegmentLen',0]
                                                                    }
                                                            },
                                            'Earth': {
                                                            '$sum': {
                                                                    '$cond': [{ '$eq': [ '$RoadCarriageway.SurfaceTyp', 'E' ] },'$RoadCarriageway.SegmentLen',0]
                                                                    }
                                                            },
                                            'Gravel': {
                                                            '$sum': {
                                                                    '$cond': [{ '$eq': [ '$RoadCarriageway.SurfaceTyp', 'G' ] },'$RoadCarriageway.SegmentLen',0]
                                                                    }
                                                            },
                                            'Mixed': {
                                                            '$sum': {
                                                                    '$cond': [{ '$eq': [ '$RoadCarriageway.SurfaceTyp', 'M' ] },'$RoadCarriageway.SegmentLen',0]
                                                                    }
                                                            }																
                                        }
                            },
                            {
                            '$group': {
                                            '_id': '',
                                            'Concrete': { '$sum': '$Concrete' },
                                            'Asphalt': { '$sum': '$Asphalt' },
                                            'Gravel': { '$sum': '$Gravel' },
                                            'Earth': { '$sum': '$Earth' },
                                            'Mixed': { '$sum': '$Mixed' },        						
                                            'total': { '$sum': 1 }
                                }
                            }
            ];

    if(qry){_agg.unshift.qry}                    
    this.aggregate(_agg,cb)
}    
 

RoadsSchema.statics.getcarriagewaypersurfacecount =  function(qry,cb){

    var _agg = [{$group: { '_id': '$RoadCarriageway.SurfaceTyp', 'SurfaceTyp': { $push: '$RoadCarriageway.SurfaceTyp'}}},
					{'$project':{_id:1,'SurfaceTyp':'$SurfaceTyp'}
					},
					{'$unwind':'$_id'},
					{'$project':
					  			{
								'Concrete':{'$cond':[{'$eq':['C','$_id']},1,0]},
								'Asphalt':{'$cond':[{'$eq':['A','$_id']},1,0]},
								'Gravel':{'$cond':[{'$eq':['G','$_id']},1,0]},
								'Earth':{'$cond':[{'$eq':['E','$_id']},1,0]},
								'Mixed':{'$cond':[{'$eq':['M','$_id']},1,0]}
								}
					},
					{ '$group': {
        						'_id': '',
        						'Concrete': { '$sum': '$Concrete' },
        						'Asphalt': { '$sum': '$Asphalt' },
        						'Gravel': { '$sum': '$Gravel' },
        						'Earth': { '$sum': '$Earth' },
        						'Mixed': { '$sum': '$Mixed' },        						
        						'total': { '$sum': 1 }
    				}}];
     if(qry){_agg.unshift.qry}                    
    this.aggregate(_agg,cb)
}

	

RoadsSchema.plugin(mongooseAggregatePaginate);
mongoose.model('Roads', RoadsSchema);