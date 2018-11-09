const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/news",(req,res)=>{
    var sql=" SELECT `nid`,`title`,`img`,`ntime`,`i1`,`i2`,`v1`,`v2` FROM `zd_news` ORDER BY `ntime` DESC";    	
	pool.query(sql,(err,result)=>{
		if(err) throw err;       
        // console.log(result);
        var obj={};        
        for(var i=0;i<result.length;i++){
            result[i].ntime=result[i].ntime.toLocaleDateString();       
            if(!obj[result[i].ntime]){
                obj[result[i].ntime]=[result[i]];
            }else{
                obj[result[i].ntime].push(result[i]);
            }
        }
        res.send(obj);       


	})
});
module.exports=router;