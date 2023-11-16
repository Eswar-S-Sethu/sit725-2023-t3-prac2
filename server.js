var express=require("express")
var app=express()
var port=process.env.port||3000;

app.listen(port,()=>{
    console.log(`App listening to: ${port}`);
})

app.get("/addTwoNumbers",(req,res)=>{
    res.json({
        status:true,
        sum: Number(req.query.num1)+Number(req.query.num2)
    })

})