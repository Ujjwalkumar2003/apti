const express=require('express')
const path=require('path')
const app=express();


app.set('view engine','hbs');
// app.use(express.json());
app.use('/',require('./routes/pages'));
// app.get("/",(req,res)=>{
//   //  res.send("<h1> Home page </h1>")
//     res.render("index")
// })

app.listen(5000,()=>{
    console.log('server js file is listening on 5000')
})