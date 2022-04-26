const express= require("express")
const app=express();
const mysql=require("mysql");
const db=mysql.createPool(
    { host:"localhost",
    pasword:"password",
    user:"root",
database:"taptodolist"

    }
);
app.get("/",(req,res)=>{
let mysql="INSERT INTO taptodolist(id,name) VALUES('1','vvvvvvvv')";
db.query(mysql,(err,result)=>{
console.log(err);

})

});

app.listen(3001,()=> {
    app.get('/',(req,res)=>{
        res.send("hello word");
    });

console.log("Rodando Servidor");


}



)