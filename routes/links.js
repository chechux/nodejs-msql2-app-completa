const express = require("express")
const router = express.Router()

const pool = require("../database")

router.get("/", async(req,res, next)=>{
    const [links] = await pool.query("SELECT * FROM links")
    res.render("links/list", {links})
})


router.get("/add", (req,res)=>{
    res.render("links/add")
})


router.post("/add", async (req,res)=>{
    const { title, url, description } = req.body
    const newLink = {
        title,
        url,
        description
    }
    await pool.query("INSERT INTO links SET ?", [newLink])
    res.redirect("/links")
})

router.get("/delete/:id", async (req,res)=>{
    const {id} = req.params
    await pool.query("DELETE FROM links WHERE id = ?",[id])
    res.redirect("/links")
})

router.get("/edit/:id", async (req,res)=>{
    const {id} = req.params
    const [link] = await pool.query("SELECT * FROM links WHERE id = ?", [id])
    // await pool.query("DELETE FROM links WHERE id = ?",[id])
    res.render("links/edit", {link:link[0]})
})

router.post("/edit/:id",(req,res)=>{
    const { id } = req.params
    const { title, url , description} = req.body
    const newLink = {
        title,
        url,
        description
    }
    pool.query("UPDATE links SET ? WHERE id = ?", [newLink, id])
    res.redirect("/links")
})

module.exports=router