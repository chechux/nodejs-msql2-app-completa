const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("LINKS")
});


module.exports = router