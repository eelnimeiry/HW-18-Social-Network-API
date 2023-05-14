const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose.connect("mongodb://localhost:27017/userThoughtDB", {
  // useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((res)=>{
    console.log('Database Connected')
}).catch((err)=>{
    console.log(err)
});

