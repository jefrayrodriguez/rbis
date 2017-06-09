'use strict';

angular.module('RBIS').factory('datamodel', ['$window','$rootScope','utilities',function ($window, $rootScope,utilities) {

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

//road
datamodel.road = {
    "RegionCode"        : {"label":"Region Code","key":"RegionCode","type":"string","options":[],"visible":false,"style":"","ctrl":"text","class":"form-control"}, 
    "ProvinceCo"        : {"label":"Province Code","key":"ProvinceCo","type":"string","options":[],"visible":false,"style":"","ctrl":"text","class":"form-control"}, 
    "CityMunCod"        : {"label":"City Code","key":"CityMunCod","type":"string","options":[],"visible":false,"style":"","ctrl":"text","class":"form-control"}, 
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

//carriageway
datamodel.RoadCarriageway = {
    "R_ID"       : {"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":false,"style":"","ctrl":"label","class":"form-control"}, 
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
    "Constructi" : {}, 
    "Construc_1" : {}, 
    "YearOfReco" : "Unknown", 
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
            "R_ID"          :{"label":"Road ID","key":"R_ID","type":"string","options":[],"visible":false,"style":"","ctrl":"label","class":"form-control"}, 
            "Name"          :{"label":"Name","key":"Name","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
            "Length"        :{"Length":"Name","key":"Length","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "TypeID"        :{"label":"Type Id","key":"TypeID","type":"String","options":datamodel.options.superstructuretype,"style":"","ctrl":"select","class":"form-control"}, 
            "LRPStartKm"    :{"label":"Km Post Start","key":"LRPStartKm","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},
            "LRPStartDi"    :{"label":"","key":"LRPStartDi","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "LRPEndKmPo"    :{"label":"Km Post End","key":"LRPEndKmPo","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"}, 
            "LRPEndDisp"    :{"label":"","key":"LRPEndDisp","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},  
            "YearBuilt"     :{"label":"Year Built","key":"YearBuilt","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},  
            "LoadLimit"     :{"label":"Load Limit","key":"LoadLimit","type":"string","options":[],"visible":true,"style":"","ctrl":"text","class":"form-control"},   
            "SuperStruc"    :{"label":"Super Strucuture Type","key":"SuperStruc","type":"String","options":datamodel.options.superstructuretype,"style":"","ctrl":"select","class":"form-control"},  
            "NumGirders"    :{"label":"Num Girders","key":"NumGirders","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"}, 
            "DeckDimens"    :{"label":"Deck Dimens","key":"DeckDimens","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"}, 
            "DeckDime_1"    :{"label":"Deck Dime 1","key":"DeckDime_1","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"}, 
            "DeckDime_2"    :{"label":"Deck Dime 2","key":"DeckDime_2","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},  
            "DeckDime_3"    :{"label":"Deck Dime 3","key":"DeckDime_3","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},   
            "ExpansionJ"    :{"label":"Expansion Joint","key":"ExpansionJ","type":"String","options":datamodel.options.expansionjoint,"style":"","ctrl":"select","class":"form-control"},   
            "Surfacing"     :{"label":"Surfacing","key":"ExpansionJ","type":"String","options":datamodel.options.bridgesurfacing,"style":"","ctrl":"select","class":"form-control"},   
            "RailingTyp"    :{"label":"Railing Type","key":"RailingTyp","type":"String","options":datamodel.options.railingtype,"style":"","ctrl":"select","class":"form-control"}, 
            "PierType"      :{"label":"Pier Type","key":"PierType","type":"String","options":datamodel.options.piertype,"style":"","ctrl":"select","class":"form-control"},  
            "PierFounda"    :{"label":"Pier Foundation","key":"PierFounda","type":"String","options":datamodel.options.pierfoundation,"style":"","ctrl":"select","class":"form-control"}, 
            "PierProtec"    :{"label":"Pier Protection","key":"PierProtec","type":"String","options":datamodel.options.pierfoundation,"style":"","ctrl":"select","class":"form-control"}, 
            "AbutmentTy"    :{"label":"Abutment Type","key":"AbutmentTy","type":"String","options":datamodel.options.abutmenttype,"style":"","ctrl":"select","class":"form-control"},  
            "AbutmentFo"    :{"label":"Abutment Foundation","key":"AbutmentFo","type":"String","options":datamodel.options.abutmentfoundation,"style":"","ctrl":"select","class":"form-control"},   
            "RiverName"     :{"label":"River Name","key":"RiverName","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},      
            "MaximumFlo"    :{"label":"Maximum Flood Level","key":"MaximumFlo","type":"String","options":datamodel.options.maximumfloodlevel,"style":"","ctrl":"select","class":"form-control"},
            "Navigation"    :{"label":"Navigation Clearance","key":"Navigation","type":"String","options":datamodel.options.navigationclearance,"style":"","ctrl":"select","class":"form-control"}, 
            "Constructi"    :{"label":"Construction Cost","key":"Constructi","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},       
            "AbtProtect"    :{"label":"Abutment Protection","key":"MaximumFlo","type":"String","options":datamodel.options.abutmentprotect,"style":"","ctrl":"select","class":"form-control"}, 
            "NoOfPier"      :{"label":"No. Of Pier","key":"NoOfPier","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},       
            "NoOfSpan"      :{"label":"No. Of Span","key":"NoOfSpan","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},       
            "SpanLength"    :{"label":"No. Of Span","key":"SpanLength","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"}, 
            "From_"         :{"label":"From_","key":"From_","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"},  
            "To_"           :{"label":"To_","key":"To_","type":"String","options":[],"style":"","ctrl":"text","class":"form-control"}
}

datamodel.structure = {
                        "road":datamodel.road,
                        "RoadCarriageway":datamodel.RoadCarriageway, 
                        "RoadBridges":datamodel.RoadBridges,
                        "RoadCauseways":[],
                        "RoadCulverts":[],
                        "RoadDitches":[],
                        "RoadGuardrails":[],
                        "RoadHazards":[],
                        "RoadJunctions":[],
                        "RoadLightings":[],
                        "RoadLocRefPoints":[],
                        "RoadMarkings":[],
                        "RoadMedian":[],
                        "RoadPlaceNames":[],
                        "RoadShoulders":[],
                        "RoadSideFriction":[],
                        "RoadSideSlopes":[],
                        "RoadSideWalks":[],
                        "RoadSigns":[],
                        "RoadSpillways":[],
                        "RoadStructures":[]
                        }                                

return datamodel;
}]);    