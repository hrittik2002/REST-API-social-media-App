const exprss  = require('express');
const router = exprss.Router();

router.get("/",(req , res)=>{
    res.send("hey its user router")
})

module.exports = router;