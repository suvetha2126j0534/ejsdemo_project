let express=require("express")
const app=express()
const port=2000
console.log(__dirname)
app.get("/",(req,res)=>{
    res.send(`<h1>Hello</h1>`)
})
app.get("/z",(req,res)=>{
    res.send('<p>Hai welcome to Node express js</p>')
})
app.get("/y",(req,res)=>{
    res.send("login page")
})
app.get("/a",(req,res)=>{
    res.send("demo")
})

app.get("/htmlpage",(req,res)=>{
    res.sendFile(__dirname+"/app.html")
})

let pageTitle="Suvetha ejs file";
let heading="Welcome to EJS";
let obj={
    name:"Suvetha",location:"Erode",course:"Mern stack"
}
let bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
let ar=[]
app.get("/demoejs",(req,res)=>{
    res.render("from.ejs",{pageTitle,heading,obj,ar})
    // res.render("from.ejs",)
})

app.post("/",(req,res)=>{
    ar.push(req.body.username)
    res.redirect("/demoejs")
})
app.listen(port,console.log("server running on "+port))