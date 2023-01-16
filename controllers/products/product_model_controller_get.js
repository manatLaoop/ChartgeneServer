
const Pmodel = require('../../models/product_default _model')

module.exports =  async  (req , res)=>{
    try {
        
        const getproduct = await Pmodel.aggregate([ { $project:{_id:1 , Pname:1  ,  Pseparatetype:1 , Pseparate:1, Pcolor:1 }}]);
        if(!getproduct){
              return res.status(404).json({message:"product is null"})
            }
            return res.status(200).json(getproduct)
            
        } catch (error) {
        return res.status(404).json({message:'get product model is founds'})
        
    }



}