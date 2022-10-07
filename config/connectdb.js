import mongoose from 'mongoose';
let connectDB=async()=>{
  try{
    connectDB.mongoose=mongoose
await connectDB.mongoose.connect(`mongodb://localhost:27017`,{
  dbName:"geekshop",
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  }catch(err){
    console.log(err)

  }
}


export default connectDB