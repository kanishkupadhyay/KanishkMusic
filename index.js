const express=require("express")
const app=express();
const path=require("path")
const PORT = process.env.PORT || 3000;
const sp=path.join(__dirname,"./public")
app.set('view engine','hbs')
app.set('views','./public/views')
app.use(express.static(sp))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/singers",(req,res)=>{
    res.render("singers")
})
app.get("/singers/sidhumoosewala",(req,res)=>{
    res.render("sidhu")
})
app.get("/singers/karanaujla",(req,res)=>{
    res.render("karan")
})
app.get("/singers/jassmanak",(req,res)=>{
    res.render("jass")
})
app.get("/singers/jassiegill",(req,res)=>{
    res.render("jassie")
})
app.get("/singers/guri",(req,res)=>{
    res.render("guri")
})
app.get("/singers/mankirtaulakh",(req,res)=>{
    res.render("mankirt")
})
app.get("/singers/gururandhawa",(req,res)=>{
    res.render("guru")
})
app.get("/singers/hardysandhu",(req,res)=>{
    res.render("hardy")
})
app.get("/singers/diljitdosanjh",(req,res)=>{
    res.render("diljit")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("*",(req,res)=>{
    res.render("error")
})
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})
