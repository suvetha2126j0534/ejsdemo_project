let express=require("express")
let app=express()
let port=3500;

let body=require('body-parser')

app.use(body.urlencoded({extended:true}))


 let users=[];
app.get("/",function(req,res){

    res.render("demo2.ejs",{users})

})


   
    app.post("/", (req, res) => {
        let newUser = {
           productname: req.body.productname,
           productdetails : req.body.productdetails,
            productprice: req.body.productprice,
            productowner: req.body.productowner,
            productquality: req.body.productquality,
            productname:req.body.productname
            
        };
    
        users.push(newUser); 
        res.redirect("/"); 
    });


    // app.post("/delete", (req, res) => {
    //     const index = parseInt(req.body.index);
    //     if (!isNaN(index)) {
    //       users.splice(index, 1);
    //     }
    //     res.redirect("/demoejs");
    //   });
    //   const bodyParser = require("body-parser");
    //   app.use(bodyParser.urlencoded({ extended: true }));

    app.post("/delete", (req, res) => {
        const index = parseInt(req.body.index);
        if (!isNaN(index) && index >= 0 && index < users.length) {
          users.splice(index, 1);
        }
        res.redirect("/");
      })
            
 
app.listen(port,console.log("server running",port))



// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const app = express();
// const port = 3000;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// let products = [];

// app.get("/", (req, res) => {
//   res.render("demo", { products });
// });

// app.post("/", (req, res) => {
//   products.push(req.body);
//   res.redirect("/");
// });

// app.post("/delete", (req, res) => {
//   const index = parseInt(req.body.index);
//   if (!isNaN(index)) {
//     products.splice(index, 1);
//   }
//   res.redirect("/");
// });

// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });
