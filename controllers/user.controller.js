const playerSchema = require('../models/user.model')         


module.exports.players = async(req,res,next)=>{
   try{
    const firstPlayer = await playerSchema.findOne().sort({_id:1})
    res.render('index',{player : firstPlayer})
   }
   catch(err){
    if(!err.message){
      err.message = "Internal server error knsdif"
    }
    if(!err.statusCode){
      err.statusCode = 500
    }
    next(err)
   }
}

module.exports.next = async(req,res,next)=>{
  try{

   const nextPlayer = await playerSchema.findOne({ _id: { $gt: req.params.id } }).sort({_id:1})
  //  console.log(req.params)
  if(!nextPlayer){
    return res.redirect('/')
  }
   res.render('index',{player : nextPlayer})
  }
  catch(err){
   if(!err.message){
     err.message = "Internal server error"
   }
   if(!err.statusCode){
     err.statusCode = 500
   }
   next(err)
  }
}

