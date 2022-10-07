const mongoose = require('mongoose');
const Option = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
 mongoose.connect('mongodb://localhost:27017/Chatgene' , Option)


 mongoose.connection.on('connected' , ()=>{
    console.log(`your db is connected`);
})

 mongoose.connection.on('error' , (err)=>{
     console.log(err) 
 })
 
 mongoose.connection.on('desconnected' , ()=>{
        console.log('db disconnrcted')
 })

 process.on('SIGNT' , ()=>{
     mongoose.connection.close(()=>{
         console.log('mongodb is close')
        process.exit(0)
     })
 })
