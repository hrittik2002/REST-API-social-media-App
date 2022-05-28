const exprss  = require('express');
const router = exprss.Router();

router.get("/" , (req,res)=>{
    console.log("post page")
})

module.exports = router;