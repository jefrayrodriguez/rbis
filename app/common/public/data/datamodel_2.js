'use strict';

angular.module('RBIS').service('datamodel', ['$window','$rootScope','utilities',function ($window, $rootScope,utilities) {

var datamodel = {};

/*  Options */
datamodel.options = {};
datamodel.options.importance = [{"key":"Core","label":"CORE"},{"key":"Non-Core","label":"NON-CORE"}];
datamodel.options.environment = [{"key":"U","label":"URBAN (METROPOLITAN)"},{"key":"N","label":"URBAN (NON-METROPOLITAN)"},{"key":"R","label":"RURAL"}];
datamodel.options.directionflow = [{"key":"One-Way","label":"ONE-WAY"},{"key":"Two-Way","label":"TWO-WAY"}];
datamodel.options.terrain = [{"key":"F","label":"FLAT"},{"key":"R","label":"ROLLING"},{"key":"M","label":"MOUNTAINOUS"}];
datamodel.options.roadaquired = [{"key":"1","label":"YES"},{"key":"0","label":"NO"}];
datamodel.options.surfacetype = [{key:"C",label:"CONCRETE"},{key:"A",label:"ASPHALT"},{key:"G",label:"GRAVEL"},{key:"E",label:"EARTH"},{key:"M",label:"MIXED"}];
datamodel.options.pavementtype = [{key:"AMGB", label:"Asphalt Mix on Granular Base"},
                                    {key:"AMAB", label:" Asphalt Mix on Asphalt Base"},
                                    {key:"AMAP", label:" Asphalt Mix on Asphalt Pavement"},
                                    {key:"AMCP", label:" Asphalt Mix on Concrete Pavement"},
                                    {key:"JPCD", label:" Joint Plain Concrete Pavement+ Dowel"},
                                    {key:"JPCO", label:" Joint Plain Concrete Pavement w/o Dowel"},
                                    {key:"CRCP", label:" Continous Reinforced Concrete Pavement"},
                                    {key:"AMCRCP", label:" Asphalt Mix Continous Reinforced Concrete Pavement"},
                                    {key:"SBST", label:" Single Bituminous Surface Treatment"},
                                    {key:"DBST", label:" Double Bituminous Surface Treatment"},
                                    {key:"SS", label:" Slurry Seal"},
                                    {key:"G", label:" Gravel"},
                                    {key:"E", label:" Earth"},
                                    {key:"NONE", label:" NONE"},
                                    {key:"UNKNOWN", label:" UNKNOWN"}];

datamodel.options.roadcondition = [{key:"N",label:"NEW"},{key:"G",label:"GOOD"},{key:"F",label:"FAIR"},{key:"P",label:"POOR"},{key:"B",label:"BAD"}]

//bridges options
datamodel.options.superstructuretype = [{key:"BAILEY", label:"BAILEY"},{key:"TIMBER", label:"TIMBER"},{key:"STEEL TRUSS", label:"STEEL TRUSS"},{key:"RC SLAB", label:"RC SLAB"},{key:"RC GIRDER", label:"RC GIRDER"},{key:"PC GIRDER", label:"PC GIRDER"},{key:"OTHERS", label:"OTHERS"}]
datamodel.options.expansionjoint = [{key:"STEEL PLATE", label:"STEEL PLATE"},{key:"FINGER JOINT", label:"FINGER JOINT"},{key:"RUBBER TYPE", label:"RUBBER TYPE"},{key:"OTHERS", label:"OTHERS"},{key:"NONE", label:"NONE"}]    
datamodel.options.bridgesurfacing = [{key:"Concrete", label:"CONCRETE"},{key:"Asphalt", label:"ASPHALT"}]
datamodel.options.railingtype = [{key:"RC", label:"REINFORCED CONCRETE"},{key:"S", label:"STEEL"}]
datamodel.options.piertype = [{key:"PILE BENT", label:"PILE BENT"},{key:"WALL TYPE", label:"WALL TYPE"},{key:"1-COLUMN", label:"1-COLUMN"},{key:"RIGID FRAME", label:"RIGID FRAME"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"}];
datamodel.options.pierfoundation = [{key:"SPREAD FOOTING", label:"SPREAD FOOTING"},{key:"PC/RC CONCRETE PILE", label:"PC/RC CONCRETE PILE"},{key:"CIP CONC/PILE", label:"CIP CONC/PILE"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"}];
datamodel.options.pierfoundation = [{key:"GABION", label:"GABION"},{key:"RIPRAP", label:"RIPRAP"},{key:"NONE", label:"NONE"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"},]
datamodel.options.abutmenttype = [{key:"PILE BENT", label:"PILE BENT"},{key:"CANTILEVER", label:"CANTILEVER"},{key:"GRAVITY", label:"GRAVITY"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"}]
datamodel.options.abutmentfoundation = [{key:"SPREAD FOOTING", label:"SPREAD FOOTING"},{key:"PC/RC CONCRETE PILE", label:"PC/RC CONCRETE PILE"},{key:"CIP CONC/PILE", label:"CIP CONC/PILE"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"}]
datamodel.options.maximumfloodlevel = [{key:"OVERFLOWED", label:"OVERFLOWED"},{key:"AT THE GIRDER LEVEL", label:"AT THE GIRDER LEVEL"},{key:"UNDER THE GIRDER LEVEL", label:"UNDER THE GIRDER LEVEL"}]
datamodel.options.navigationclearance = [{key:"NOT REQUIRED", label:"NOT REQUIRED"},{key:"INSUFFICIENT", label:"INSUFFICIENT"},{key:"SUFFICIENT", label:"SUFFICIENT"}]    
datamodel.options.abutmentprotect = [{key:"GABION", label:"GABION"},{key:"GROUTED RIPRAP", label:"GROUTED RIPRAP"},{key:"NONE", label:"NONE"},{key:"OTHERS", label:"OTHERS"},{key:"UNKNOWN", label:"UNKNOWN"}]

//Other features
datamodel.options.ofeaturetype = [
	{key:"N", label:"NONE"},
	{key:"L", label:"LIGHT"},
	{key:"M", label:"MEDIUM"},
	{key:"H", label:"HEAVY"}
];

//Safety Appliance
datamodel.options.position = [
	{key:"L", label:"LEFT"},
	{key:"R", label:"RIGHT"},
	{key:"C", label:"CENTER"}
];    
datamodel.options.safetyfeaturetype = [
    {key:"S", label:"STEEL"},
	{key:"W", label:"WALL"},
	{key:"T", label:"TEMPORARY"},
	{key:"N", label:"NONE"}
];
datamodel.options.hazardseverity = [
    {key:"L", label:"LOW"},
	{key:"M", label:"MEDIUM"},
	{key:"H", label:"HIGH"}
];


//Side features
datamodel.options.angle = [
    {key:"SH", label:"SHALLOW"},
	{key:"MD", label:"MEDIUM"},
	{key:"ST", label:"STEEP"}
];
datamodel.options.sideslopetype = [
    {key:"E", label:"EMBANKMENT"},
	{key:"C", label:"CUT"}
];
datamodel.options.protection = [
    {key:"COCONET BIOENGINEERING", label:"COCONET BIOENGINEERING"},
	{key:"RUBBLE CONCRETE", label:"RUBBLE CONCRETE"},
	{key:"CONCRETE SLOPE PROTECTION", label:"CONCRETE SLOPE PROTECTION"},
	{key:"GROUTED RIPRAP", label:"GROUTED RIPRAP"},
	{key:"STONE MASONRY", label:"STONE MASONRY"},
	{key:"GABIONS", label:"GABIONS"},
	{key:"SHEET PILES", label:"SHEET PILES"},
	{key:"EROSION CONTROL MATS", label:"EROSION CONTROL MATS"},
	{key:"PERMANENT GROUND ANCHORS", label:"PERMANENT GROUND ANCHORS"},
	{key:"SHOTCRETE", label:"SHOTCRETE"},
	{key:"MECHANICALLY STABILIZED EARTH RETAINING WALLS", label:"MECHANICALLY STABILIZED EARTH RETAINING WALLS"},
	{key:"WET STONE MASONRY", label:"WET STONE MASONRY"}
];
datamodel.options.structuretype = [
	{key:"R", label:"RETAINING WALL"},
	{key:"O", label:"OBSTRUCTION"},
	{key:"P", label:"PARKING"},
	{key:"OT", label:"OTHERS"},
	{key:"N", label:"NONE"}]

 // Road Drainage
 datamodel.options.ditchestype = [
	{key:"UN", label:"UNLINED DITCH"},
	{key:"LO", label:"LINED OPEN DITCH"},
	{key:"LC", label:"LINE CLOSED DITCH"},
	{key:"SD", label:"STORM DRAIN"}
 ]
datamodel.options.ditchessize = [
    {key:"S", label:"SHALLOW"},
	{key:"M", label:"MEDIUM"},
	{key:"S", label:"STEEP"}
];

datamodel.options.culverttype = [
	{key:"P", label:"PIPE"},
	{key:"B", label:"BOX"},
	{key:"A", label:"ARCH"},
	{key:"O", label:"OTHERS"}
];
datamodel.options.culvertcondition = [
    {key:"G", label:"GOOD (&lt;25% SILTATION)"},
	{key:"F", label:"FAIR (25%-50% SITATION)"},
	{key:"P", label:"POOR (&gt;50% SILTATION)"}
];
datamodel.options.culvertmaterialtype = [
    {key:"C", label:"CONCRETE"},
	{key:"S", label:"STEEL"},
	{key:"M", label:"MASONRY"},
	{key:"T", label:"TIMBER"},
	{key:"O", label:"OTHERS"}
];
datamodel.options.culvertaprontype = [
	{key:"C", label:"CONCRETE"},
	{key:"S", label:"STEEL"},
	{key:"M", label:"MASONRY"},
	{key:"T", label:"TIMBER"},
	{key:"O", label:"OTHERS"}
];
datamodel.options.culvertslope = [
	{key:"P", label:"PILED WALLS"},
	{key:"S", label:"STONE PITCHING"},
	{key:"R", label:"RIPRAP"},
	{key:"M", label:"MASONRY"},
	{key:"T", label:"TIMBER"},
	{key:"O", label:"OTHERS"}
];
	
//road
datamodel.road = {
    "RegionCode"        : {"label":"Region Code","key":"RegionCode","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "ProvinceCo"        : {"label":"Province Code","key":"ProvinceCo","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "CityMunCod"        : {"label":"City Code","key":"CityMunCod","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "R_ID"              : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"}, 
    "R_NAME"            : {"label":"Name","key":"R_NAME","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "R_CLASS"           : {"label":"Class","key":"R_CLASS","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "R_Importan"        : {"label":"Importance","key":"R_Importan","type":"string","options":datamodel.options.importance,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "Environmen"        : {"label":"Environment","key":"Environmen","type":"string","options":datamodel.options.environment,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "RROW"              : {"label":"RROW","key":"RROW","type":"float","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "RROWAcquir"        : {"label":"RROW Aquired","key":"RROWAcquir","type":"String","options":datamodel.options.roadaquired,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "DirFlow"           : {"label":"Direction Flow","key":"DirFlow","type":"String","options":datamodel.options.directionflow,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "Terrain"           : {"label":"Terrain","key":"Terrain","type":"String","options":datamodel.options.terrain,"style":"","ctrl":"select","class":"form-control"}, 
    "Length"            : {"label":"Length","key":"Length","type":"float","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "RROW_acq_date"     : {"label":"RROW Acquisition Date","key":"RROW_acq_date","type":"date","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "RROW_acq_cost"     : {"label":"RROW Acquisition Cost","key":"RROW_acq_cost","type":"float","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "RROW_usefullife"   : {"label":"RROW Useful Life","key":"RROW_usefullife","type":"integer","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "remarks"           : {"label":"Remarks","key":"remarks","type":"string","options":[],"visible":true,"style":"","ctrl":"textarea","class":"form-control"}
};

//carriageway"Constructi" : {}, "Construc_1" : {}, 
datamodel.RoadCarriageway = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"}, 
    "SegmentID"  : {"label":"Segment ID","key":"SegmentID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"}, 
    "LRPStartKm" : {"label":"Start","key":"LRPStartKm","type":"String","options":[],"style":"","ctrl":"select","class":"form-control"}, 
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},  
    "LRPEndKmPo" : {"label":"End","key":"LRPStartKm","type":"String","options":[],"style":"","ctrl":"select","class":"form-control"}, 
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},   
    "NumLanes"   : {"label":"No. of Lanes","key":"NumLanes","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "LaneWidthL" : {"label":"Lane Width Left","key":"LaneWidthL","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "LaneWidthR" : {"label":"Lane Width Right","key":"LaneWidthR","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "SegmentLen" : {"label":"Segment Length","key":"SegmentLen","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"}, 
    "SurfaceTyp" : {"label":"Surface Type","key":"SurfaceTyp","type":"String","options":datamodel.options.surfacetype,"style":"","ctrl":"select","class":"form-control"},  
    "PavementTy" : {"label":"Pavement Type","key":"PavementTy","type":"String","options":datamodel.options.pavementtype,"style":"","ctrl":"select","class":"form-control"},  
    "DateOfLast" : {"label":"Date of Last Resurfacing","key":"DateOfLast","type":"date","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},      
    "YearOfReco" : {"label":"Year of Reconstruction","key":"YearOfReco","type":"date","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},  
    "SegmentCon" : {"label":"Condition","key":"SegmentCon","type":"String","options":datamodel.options.roadcondition,"style":"","ctrl":"select","class":"form-control"},  
    "PavementThickness"  : {"label":"Pavement Thickness","key":"PavementThickness","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "PavementStrength"  : {"label":"Pavement Strength","key":"PavementStrength","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "ConstructionDate" : {"label":"Construnction Date","key":"ConstructionDate","type":"date","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},  
    "Lifeyears"  : {"label":"Useful Life Year(s)","key":"Lifeyears","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "carriagewayWidth":{"label":"Carriageway Width","key":"carriagewayWidth","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
    "remarks"    : {"label":"Remarks","key":"remarks","type":"string","options":[],"visible":true,"style":"","ctrl":"textarea","class":"form-control"}
}

//Road Bridgesdata
datamodel.RoadBridges = {
            "R_ID"          :{"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"}, 
            "Name"          :{"label":"Name","key":"Name","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
            "Length"        :{"label":"Length(Km)","key":"Length","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "TypeID"        :{"label":"Type Id","key":"TypeID","type":"String","options":datamodel.options.superstructuretype,"style":"","ctrl":"select","class":"form-control"}, 
            "LRPStartKm"    :{"label":"Km Post Start","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
            "LRPStartDi"    :{"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "LRPEndKmPo"    :{"label":"Km Post End","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "LRPEndDisp"    :{"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},  
            "YearBuilt"     :{"label":"Year Built","key":"YearBuilt","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},  
            "LoadLimit"     :{"label":"Load Limit","key":"LoadLimit","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},   
            "SuperStruc"    :{"label":"Super Strucuture Type","key":"SuperStruc","type":"String","options":datamodel.options.superstructuretype,"style":"","ctrl":"select","class":"form-control"},  
            "NumGirders"    :{"label":"Num Girders","key":"NumGirders","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,}, 
            "DeckDimens"    :{"label":"Deck Dimens","key":"DeckDimens","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,}, 
            "DeckDime_1"    :{"label":"Deck Dime 1","key":"DeckDime_1","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,}, 
            "DeckDime_2"    :{"label":"Deck Dime 2","key":"DeckDime_2","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},  
            "DeckDime_3"    :{"label":"Deck Dime 3","key":"DeckDime_3","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},   
            "ExpansionJ"    :{"label":"Expansion Joint","key":"ExpansionJ","type":"String","options":datamodel.options.expansionjoint,"style":"","ctrl":"select","class":"form-control","visible":true,},   
            "Surfacing"     :{"label":"Surfacing","key":"ExpansionJ","type":"String","options":datamodel.options.bridgesurfacing,"style":"","ctrl":"select","class":"form-control","visible":true,},   
            "RailingTyp"    :{"label":"Railing Type","key":"RailingTyp","type":"String","options":datamodel.options.railingtype,"style":"","ctrl":"select","class":"form-control","visible":true,}, 
            "PierType"      :{"label":"Pier Type","key":"PierType","type":"String","options":datamodel.options.piertype,"style":"","ctrl":"select","class":"form-control","visible":true,},  
            "PierFounda"    :{"label":"Pier Foundation","key":"PierFounda","type":"String","options":datamodel.options.pierfoundation,"style":"","ctrl":"select","class":"form-control","visible":true,}, 
            "PierProtec"    :{"label":"Pier Protection","key":"PierProtec","type":"String","options":datamodel.options.pierfoundation,"style":"","ctrl":"select","class":"form-control","visible":true,}, 
            "AbutmentTy"    :{"label":"Abutment Type","key":"AbutmentTy","type":"String","options":datamodel.options.abutmenttype,"style":"","ctrl":"select","class":"form-control","visible":true,},  
            "AbutmentFo"    :{"label":"Abutment Foundation","key":"AbutmentFo","type":"String","options":datamodel.options.abutmentfoundation,"style":"","ctrl":"select","class":"form-control","visible":true,},   
            "RiverName"     :{"label":"River Name","key":"RiverName","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},      
            "MaximumFlo"    :{"label":"Maximum Flood Level","key":"MaximumFlo","type":"String","options":datamodel.options.maximumfloodlevel,"style":"","ctrl":"select","class":"form-control","visible":true,},
            "Navigation"    :{"label":"Navigation Clearance","key":"Navigation","type":"String","options":datamodel.options.navigationclearance,"style":"","ctrl":"select","class":"form-control","visible":true,}, 
            "Constructi"    :{"label":"Construction Cost","key":"Constructi","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},       
            "AbtProtect"    :{"label":"Abutment Protection","key":"MaximumFlo","type":"String","options":datamodel.options.abutmentprotect,"style":"","ctrl":"select","class":"form-control","visible":true,}, 
            "NoOfPier"      :{"label":"No. Of Pier","key":"NoOfPier","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},       
            "NoOfSpan"      :{"label":"No. Of Span","key":"NoOfSpan","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},       
            "SpanLength"    :{"label":"No. Of Span","key":"SpanLength","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,}, 
            "From_"         :{"label":"From_","key":"From_","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,},  
            "To_"           :{"label":"To_","key":"To_","type":"String","options":[],"style":"","ctrl":"text","class":"form-control","visible":true,}
}
//Road KM Post
datamodel.RoadLocRefPoints = {
        "R_ID"      : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},
        "KMPostNo"  : {"label":"KM Post No.","key":"KMPostNo","type":"String","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
        "LAT"       : {"label":"Latitude","key":"Lat","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
        "LONG"      : {"label":"Longitude","key":"LONG","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
}

//Road Other Features
datamodel.RoadSideFriction={
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},
    "TypeID"     : {"label":"Type","key":"TypeID","type":"String","options":datamodel.options.ofeaturetype,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "From_"      : {"label":"From_","key":"From_","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "To_"        : {"label":"To_","key":"To_","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}
}
datamodel.RoadPlaceNames={
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},    
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Name"      : {"label":"Name","key":"Name","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}    
};
datamodel.RoadJunctions={
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},
    "TypeID"     : {"label":"Type","key":"TypeID","type":"String","options":datamodel.options.ofeaturetype,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"}    
}
datamodel.RoadMedian={
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},
    "TypeID"     : {"label":"Type","key":"TypeID","type":"String","options":datamodel.options.ofeaturetype,"visible":true,"style":"","ctrl":"select","class":"form-control"}, 
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Width" : {"label":"Width(m)","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
}

//Road Safety Features
datamodel.RoadGuardrails = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.safetyfeaturetype,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "From_"      : {"label":"From_","key":"From_","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "To_"        : {"label":"To_","key":"To_","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}
};
datamodel.RoadHazards = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.safetyfeaturetype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Severity"     : {"label":"Type","key":"Severity","type":"string","options":datamodel.options.hazardseverity,"visible":true,"style":"","ctrl":"select","class":"form-control"}          
};

datamodel.RoadLightings = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Exist"      : {"label":"Exist","key":"Exist","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}
};
datamodel.RoadMarkings = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Exist"      : {"label":"Exist","key":"Exist","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}
};
datamodel.RoadSigns = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Exist"      : {"label":"Exist","key":"Exist","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}
};

//Road Side Features
datamodel.RoadShoulders = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.surfacetype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Exist"      : {"label":"Exist","key":"Exist","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "Width" : {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}    
};
datamodel.RoadSideSlopes = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.sideslopetype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Angle"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.angle,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Protection"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.protection,"visible":true,"style":"","ctrl":"select","class":"form-control"},    
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}    
};
datamodel.RoadStructures = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.structuretype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}
};
datamodel.RoadSideWalks = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.surfacetype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "Width" : {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}    
};

// Road Drainage
datamodel.RoadCauseways = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "Width" : {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Length" : {"label":"Length(m)","key":"length","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}        
};

datamodel.RoadCulverts = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.culverttype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Width" :    {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "NumBarrels" : {"label":"No. Of Barrels","key":"NumBarrels","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Length"     : {"label":"Length(m)","key":"length","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},            
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.culvertcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},      
    "BarrelMaterialType"  : {"label":"Barrel Material Type","key":"BarrelMaterialType","type":"string","options":datamodel.options.culvertmaterialtype,"visible":true,"style":"","ctrl":"select","class":"form-control"},              
    "HeadwayMaterial"  : {"label":"Headway Material Type","key":"HeadwayMaterial","type":"string","options":datamodel.options.culvertmaterialtype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "ApronType"  : {"label":"Apron Type","key":"ApronType","type":"string","options":datamodel.options.culvertaprontype,"visible":true,"style":"","ctrl":"select","class":"form-control"},                        
    "InvertType"  : {"label":"Invert Type","key":"InvertType","type":"string","options":datamodel.options.culvertaprontype,"visible":true,"style":"","ctrl":"select","class":"form-control"},                        
    "Slope"  : {"label":"Slope","key":"Slope","type":"string","options":datamodel.options.culvertslope,"visible":true,"style":"","ctrl":"select","class":"form-control"},                        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"}        
};
datamodel.RoadDitches = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},    
    "TypeID"     : {"label":"Type","key":"TypeID","type":"string","options":datamodel.options.ditchestype,"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "Position"   : {"label":"Position","key":"Position","type":"string","options":datamodel.options.position,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "Size"   :   {"label":"Position","key":"Size","type":"string","options":datamodel.options.ditchessize,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "Width" : {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}    
};
datamodel.RoadSpillways = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":true,"style":"","ctrl":"label","class":"form-control"},   
    "LRPStartKm" : {"label":"Start(Km)","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPStartDi" : {"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "LRPEndKmPo" : {"label":"End(Km)","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"select","class":"form-control"},
    "LRPEndDisp" : {"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},        
    "Cost"       : {"label":"Cost","key":"Cost","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Usefullife" : {"label":"Useful Life","key":"Usefullife","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Condition"  : {"label":"Condition","key":"Condition","type":"string","options":datamodel.options.roadcondition,"visible":true,"style":"","ctrl":"select","class":"form-control"},        
    "ConstructionDate" : {"label":"Construction Date","key":"ConstructionDate","type":"string","options":[],"visible":true,"style":"","ctrl":"date","class":"form-control"},
    "Width" : {"label":"Width","key":"Width","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
    "Length" : {"label":"Length(m)","key":"length","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}        
};




datamodel.structure = {
                        "road":datamodel.road,
                        "RoadCarriageway":datamodel.RoadCarriageway, 
                        "RoadBridges":datamodel.RoadBridges,
                        "RoadCauseways":datamodel.RoadCauseways,
                        "RoadCulverts":datamodel.RoadCulverts,
                        "RoadDitches":datamodel.RoadDitches,
                        "RoadGuardrails":datamodel.RoadGuardrails,
                        "RoadHazards":datamodel.RoadHazards,
                        "RoadJunctions":datamodel.RoadJunctions,
                        "RoadLightings":datamodel.RoadLightings,
                        "RoadLocRefPoints":datamodel.RoadLocRefPoints,
                        "RoadMarkings":datamodel.RoadMarkings,
                        "RoadMedian":datamodel.RoadMedian,
                        "RoadPlaceNames":datamodel.RoadPlaceNames,
                        "RoadShoulders":datamodel.RoadShoulders,
                        "RoadSideFriction":datamodel.RoadSideFriction,
                        "RoadSideSlopes":datamodel.RoadSideSlopes,
                        "RoadSideWalks":datamodel.RoadSideWalks,
                        "RoadSigns":datamodel.RoadSigns,
                        "RoadSpillways":datamodel.RoadSpillways,
                        "RoadStructures":datamodel.RoadStructures
                        }                                






datamodel.utils = {};

datamodel.utils.displayattributestable=  function(n,o,maxheight){    
            n="Road" + n;
            var table = "<div style='max-height:" +  (maxheight || 400) +"px;overflow-y:auto;overflow-x:hidden;'><table class='table'>";
            var _model =!datamodel.structure[n]?datamodel.structure["road"]:datamodel.structure[n];
            var _getvalue = function(model,o){
                if(model.ctrl="select" && model.options.length>0 && model.visible){
                            var idx  = model.options.map(function(d){return d.key.toUpperCase}).indexOf((o[model.key] || "").toUpperCase);
                            return idx>-1?model.options[idx].label :"";
                }else{
                    return o[model.key] || "";
                };
            };

            var m = _model;
                for(var n in _model){
                   var objdata = _model[n];
                        table+="<tr><td>"  + objdata.label + "</td><td>" + _getvalue(objdata,o) + "</td>"
                }
             
            table+="</table></div>"
            return table;
    }; 





return datamodel;
}]);    