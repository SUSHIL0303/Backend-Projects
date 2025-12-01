const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoute = require('./routes/product.route.js');
require('dotenv').config();


app.use(express.json());
const PORT = process.env.PORT || 5000;;

app.listen(PORT,()=>{
  console.log(`Servr is running on PORT ${PORT}`);
})

app.get('/',(req,res)=>{
  res.send("Hi biro");
});

app.use('/api/products', productRoute);

const URL = process.env.MONGO_URL;
;
mongoose.connect(URL)
.then(()=>{
  console.log("MongoDb Connected Successfully!")
})
.catch(()=>{
  console.log("Connection Failed!")
})