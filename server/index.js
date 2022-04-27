const express= require("express")
const app=express();
const mysql=require("mysql");
const cors=require("cors");
const db=mysql.createPool(
    { host:"localhost",
    password:"123456789",
    user:"root",
    database:"taptodolist"

    }
);
app.use(cors());
app.use(express.json())

app.post("/adicionar",(req,res)=>{

const text=req.body;

let mysql="INSERT INTO todobase(todobasetext)values(?)";
db.query(mysql,[text],(err,result)=>{
    console.log(err);
})
})
app.put("/edit", (req, res) => {
    const id  = req.body;
    const  text  = req.body;
    
    
    let mysql = "UPDATE todobase SET text = ?, WHERE id = ?";
    db.query(mysql, [id,text], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
    
  
app.get("/adicionados",(req,res)=>{
    let mysql = "SELECT * FROM todobase";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

});
app.delete("/eliminar/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM todobase WHERE id = ?";
    db.query(mysql, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001,()=> {
    app.get('/',(req,res)=>{
        res.send("hello word");
    });

console.log("Rodando Servidor");


}



)