const express=require("express");
const bodyParse=require("body-parser");
const cors=require("cors");
const carousel=require("./routes/carousel");
const news=require("./routes/news");
const newsdetails=require("./routes/newsdetails");
var app=express();
app.use(bodyParse.urlencoded({extended:false}));
app.use(cors({
    origin:["http://localhost:8080"],
    credentials:true
}));
app.listen(3008);
app.use(express.static(__dirname+"/public"));
app.use("/",carousel);
app.use("/",news);
app.use("/",newsdetails);