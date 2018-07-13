var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('../models/user.js');
var Iteam = require('../models/iteam.js');
module.exports= {
  createIteam: (req,res)=>{
    Iteam.create(req.body).then((success)=>res.json({
      "msg":"your list is formed"+success,
      statusCode:200
    }))
    .catch((error)=>res.json({
      "msg":"something went wrong",
      statusCode:400
      }))
    },
    createUser: (req,res)=>{
      console.log("user is creating|||||||||||||||||");
      User.create(req.body).then((success)=>res.json({
        "msg":"user details is saved"+success,
        statusCode:200
      }))
      .catch((error)=>res.json({
        "msg":"something went wrong",
        statusCode:400
        })
      )
    },
    findCollection :(req,res)=>{
      console.log("finding|||||||||||||||\\\\");
      User.find().then((success)=>res.json({
        "msg":"user details is saved"+success,
        statusCode:200
      }))
      .catch((error)=>res.json({
        "msg":"something went wrong",
        statusCode:400
        })
      )
    },
    updateOne: (req,res)=>{
      console.log("inserting||||||||||||||||||||");
      User.updateOne({"name":"sunsilk"},{
        $set:{
          "name":"kavi"
        }
      }).then((success)=>res.json({
        "msg":"user details is saved"+JSON.stringify(success),
        statusCode:200
      }))
      .catch((error)=>res.json({
        "msg":"something went wrong",
        statusCode:400
        })
      )
    },
    findAnd: (req,res)=>{
      console.log("finding||||||||||||||");
      Iteam.find( { $and: [ { iteamquantity: { $ne: 123 } }, { iteamquantity: { $exists: true } } ] } ).then((success)=>
      res.json({
        "msg":"users detail"+success,
        statusCode:200
      }))
      .catch((error)=>res.json({
        "msg":"something went wrong",
        statusCode:400
        })
      )
    },
    Count: (req,res)=>{
      console.log("counting|||||||||||");
      Iteam.aggregate([{$count:"iteamname"}]).then((success)=>
    res.json({
      "msg":"total iteam quantity"+JSON.stringify(success),
      statusCode:200
    }))
    .catch((err)=>
    res.json({
      "msg":"erre"+err,
      statusCode:400
    })
  )
},
regex: (req,res)=>{
  console.log("finding|||||||||||||||||||||||||||");
  Iteam.find({  $and:  [ { $and: [ {description: { $regex: "bus  iness",$options:"xi" } },
                         {description: {$regex: "enter  tainment",$options:"xi"}}]},
                         {  $and: [ {iteamname: { $regex: "bus  iness",$options:"xi" } },
                            {iteamname: {$regex: "enter  tainment",$options:"xi"}}]}
                        ]
                       })






 .then((success)=>{
   console.log("response"+success);
res.json({
  // console.log("response"+success);
  "msg":"total iteam quantity"+JSON.stringify(success),
  statusCode:200
})
})
.catch((err)=>{
console.log("error||||||||||||||||"+err);
res.json({
  "msg":"erre"+JSON.stringify(err),
  statusCode:400
})
})
}
}
