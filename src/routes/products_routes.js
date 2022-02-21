const express = require('express');
const router = express.Router();
const conectionSql= require('../database.js')

router.get('/',(req,res) => {
        conectionSql.query('SELECT * FROM  productos', (err, rows) => {
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
        conectionSql.query('SELECT * FROM productos WHERE ID = ?',[id],(err,rows)=>{
            if (err) {
                console.log(err);
            } else {
                res.json(rows)
            }
           
        })
})    
    
router.post('/create', (req,res) => {

    const {id, nombre, precio, descripcion, image} = req.body;
    const query = ` 
        SET @id=?;
        SET @nombre=?;
        SET @precio=?;
        SET @descripcion=?;
        SET @image=?;
        CALL productosAdd(@id, @nombre, @precio, @descripcion, @image);
    `;
    conectionSql.query(query, [id, nombre, precio, descripcion, image],(err) => {
        if (!err){
            res.json({status: 'success'});
        }else {
            console.log(err);
        }
    })
})
module.exports = router