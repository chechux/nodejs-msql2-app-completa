const express = require("express")
const router = express.Router()

const pool = require("../database")

router.get("/", async(req,res)=>{
    const [result] = await pool.query("SELECT 1+1")
    res.json(result)
})


router.get("/add", (req,res)=>{
    res.render("links/add")
})


router.post("/add", (req,res)=>{
    const { title, url , description} = req.body
    const newLink = {
        title,
        url,
        description
    }
    console.log(newLink)
    res.send("recivido")
})
module.exports=router