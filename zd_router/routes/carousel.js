const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/carousel",(req,res)=>{
	var sql="SELECT `cid`, `img`, `title` FROM `zd_carousel`";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		//obj=result;
		res.send(result);
	});
});
module.exports=router;