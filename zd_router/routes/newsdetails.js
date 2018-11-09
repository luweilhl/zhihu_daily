const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/newsdetails",(req,res)=>{
    //console.log(1);
    //var ntime=req.query.ntime;
    //console.log(ntime);
    //'2018-01-01 00:00:00'
    var id=req.query.nid;
    var sql="SELECT `pid`, `nid`, `img`, `title`, `subtitle`, `author`, `content1`, `content2`, `content3`, `content4`, `img_detail1`, `img_detail2`, `img_detail3`, `img_detail4`, `img_detail5`, `img_detail6` FROM `zd_newsdetails` WHERE nid=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw error;
        res.send(result);
        
    })
});
module.exports=router;