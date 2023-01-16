 const Pmodel = require('../../models/product_default _model');
module.exports  = async (req , res)=>{
     try {
        const data = {
            Pname:req.body.Pname,
            Pseparatetype:req.body.Pseparatetype,
            Pseparate:req.body.Pseparate, 
            Pcolor:req.body.color

        }
         const CreatPmodels = await Pmodel.create(data).then((dataResult)=>{ 
                console.log(dataResult);
                res.status(201).json(dataResult);
         }).catch((err)=>{
                return res.send(err.message)
         });

     } catch (error) {
         return res.status(401).json({message:'insert product model is found'})
     }   



    
}