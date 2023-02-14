const express = require("express")
const router = express.Router()

const pool = require("../database")

router.get("/", async(req,res)=>{
    const [result] = await pool.query("SELECT 1+1")
    res.json(result)
})

module.exports=router