const { default: mongoose } = require("mongoose")

const dbConnect = () => {
  try{
    const conn = mongoose.connect('mongodb://localhost:27017/')
    console.log('Database connected succesfully')
  }catch(error) {
    console.log('Database error');
  }
  
}