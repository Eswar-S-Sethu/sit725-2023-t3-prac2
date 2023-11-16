var express=require("express")
var app=express()
var port=process.env.port||3000;

app.listen(port,()=>{
    console.log(`App listening to: ${port}`);
})

app.use(express.static(__dirname+"/"))

app.get("/", (res,res)=>{
    res.render("index.html")
});

app.get("/addTwoNumbers",(req,res)=>{
    res.json({
        status:true,
        sum: Number(req.query.num1)+Number(req.query.num2)
    })

})