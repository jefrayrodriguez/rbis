'use strict';
const mongoose = require('mongoose');
const local_locations = require('../controllers/local-location');
module.exports = (app)=>{

app.get("/api/location/getregionprovince",(req,res)=>{
    local_locations.getregionprovince(req,res);
});

app.get("/api/location/getmunicity",(req,res)=>{
    local_locations.getmunicity(req,res);
});


}
