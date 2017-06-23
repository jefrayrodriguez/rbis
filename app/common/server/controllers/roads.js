'use strict';
const mongoose = require('mongoose');

exports.getprovroadshortinfo =  (req,res)=>{
    var roads = mongoose.model("Roads");
    var code = req.query.code;
    roads.getprovroadshortinfo(code,function(err,docs){
        if(err){res.status(500).json(err);return};
        res.status(200).json(docs);
    })
}

exports.getcitymunroadshortinfo =  (req,res)=>{
    var roads = mongoose.model("Roads");
    var code = req.query.code;
    roads.getcitymunroadshortinfo(code,function(err,docs){
        if(err){res.status(500).json(err);return};
        res.status(200).json(docs);
    })
}

exports.getroadattrinfo =  (req,res)=>{
    var roads = mongoose.model("Roads");
    var rid = req.query.rid || "";
    if(rid=="") {res.status(500).json({"error":"no road id supplied"});return}

    roads.getroadattrinfo(rid,function(err,docs){
        if(err){res.status(500).json(err);return};
        res.status(200).json(docs);
    })
};

exports.getroadshortattrinfo =  (req,res)=>{
    var roads = mongoose.model("Roads");
    var rid = req.query.rid || "";
    if(rid=="") {res.status(500).json({"error":"no road id supplied"});return}
    roads.getroadshortattrinfo(rid,function(err,docs){
        if(err){res.status(500).json(err);return};
        res.status(200).json(docs);
    })
};

exports.getroadattr = (req,res)=>{
    var roads = mongoose.model("Roads");
    var rid = req.query.rid || "";
    var attr = req.query.attr || "";
    if(rid=="") {res.status(500).json({"error":"no road id supplied"});return}
    if(attr=="") {res.status(500).json({"error":"no attribute supplied"});return} 
    roads.getroadattr(rid,attr,function(err,docs){
        if(err){res.status(500).json(err);return};
        res.status(200).json(docs);
    })
};

exports.getroadaggmain = (req,res)=>{
    var roads = mongoose.model("Roads");
    var qry = req.query.qry;
    var page= req.query.page || 1;
    var limit= req.query.limit || 10;

    roads.getroadaggmain(qry,page,limit,function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data);
    })
}


exports.getroadlengthtotal = (req,res)=>{
    var roads = mongoose.model("Roads");
    roads.getroadlengthtotal(function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data[0]);
    });
}

exports.getbridgelengthtotal = (req,res)=>{
    var roads = mongoose.model("Roads");
    roads.getbridgelengthtotal(function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data[0]);
    });
}


exports.getcarriagewayperconcount = (req,res)=>{
    var roads = mongoose.model("Roads");
    var _qry = req.query.qry || [];
    roads.getcarriagewayperconcount(_qry,function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data[0]);
    });
}

exports.getcarriagewaypersurfacelength = (req,res)=>{
    var roads = mongoose.model("Roads");
    var _qry = req.query.qry || [];
    roads.getcarriagewaypersurfacelength(_qry,function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data[0]);
    });
}

exports.getcarriagewaypersurfacecount = (req,res)=>{
    var roads = mongoose.model("Roads");
    var _qry = req.query.qry || [];
    roads.getcarriagewaypersurfacecount(_qry,function(err,data){
        if(err){res.status(500).json(err);return;};
        res.status(200).json(data[0]);
    });
}





