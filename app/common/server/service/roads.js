'use strict';
const mongoose = require('mongoose');
const roads = require('../controllers/roads');
module.exports = (app)=>{

app.get("/api/roads/getprovroadshortinfo",(req,res)=>{
    roads.getprovroadshortinfo(req,res);
});

app.get("/api/roads/getcitymunroadshortinfo",(req,res)=>{
    roads.getcitymunroadshortinfo(req,res);
});


app.get("/api/roads/getroadattrinfo",(req,res)=>{
    roads.getroadattrinfo(req,res);
});

app.get("/api/roads/getroadshortattrinfo",(req,res)=>{
    roads.getroadshortattrinfo(req,res);
});

app.get("/api/roads/getroadattr",(req,res)=>{
    roads.getroadattr(req,res);
});


app.get("/api/roads/getroadaggmain",(req,res)=>{
    roads.getroadaggmain(req,res);
});

app.get("/api/roads/getroadlengthtotal",(req,res)=>{
    roads.getroadlengthtotal(req,res);
});

app.get("/api/roads/getbridgelengthtotal",(req,res)=>{
    roads.getbridgelengthtotal(req,res);
});

app.get("/api/roads/getcarriagewayperconcount",(req,res)=>{
    roads.getcarriagewayperconcount(req,res);
});

app.get("/api/roads/getcarriagewaypersurfacecount",(req,res)=>{
    roads.getcarriagewaypersurfacecount(req,res);
});


}
