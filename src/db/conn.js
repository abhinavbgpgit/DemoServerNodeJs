
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb+srv://abhinav:kuttanekata@cluster0.cmeyv.mongodb.net/mernstack?retryWrites=true&w=majority';
mongoose.connect(mongoDB)
  .then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("connection failed")
})
