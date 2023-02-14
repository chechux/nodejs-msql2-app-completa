const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Landing main app page")
});


module.exports = router