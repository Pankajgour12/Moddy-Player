const express = require('express');
const songRoutes =require("../src/routes/song.routes")
const app = express();
app.use(express.json())



app.use('/',songRoutes);



module.exports=app;