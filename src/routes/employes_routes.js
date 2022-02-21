const express = require('express');
const router = express.Router();
const conectionSql= require('../database.js')

router.get('/',(req,res) => {
        conectionSql.query('SELECT * FROM  employes', (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                res.json(rows)
                console.log(req)
            }
        });
    });

router.get('/:id', (req,res)=>{
    const id = req.params.id;
        conectionSql.query('SELECT * FROM employes WHERE ID = ?',[id],(err,rows)=>{
            if (err) {
                console.log(err);
            } else {
                res.json(rows)
            }
           
        })
})    
    
router.post('/create', (req,res) => {

    const {nombre, apellido, id, correo}=req.body;
    const query = ` 
        SET @id=?;
        SET @nombre=?;
        SET @apellido=?;
        SET @email=?;
        CALL employeeAdd(@id, @nombre, @apellido, @email);
    `;
    conectionSql.query(query, [nombre,apellido,id,correo],(err) => {
        if (!err){
            res.json({status: 'success'});
        }else {
            console.log(err);
        }
    })
})
module.exports = router