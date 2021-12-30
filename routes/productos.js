const express = require('express');
const { addListener } = require('nodemon');

const router = express.Router();    //Instanciamos la funcion de Router 

const Producto = require('../models/producto'); // instanciamos el archivo que contendra el modelo 


router.get('/', async(req,res) =>{               //Aqui se especificara cada vez que se reciba una solicitud -- Siempre que trabajemos con base de datos se debe hacer Asincronamente 
    try{
        const productos = await Producto.find().lean();
        // console.log(productos)
        res.json(productos);                                //Una vez lo enncuente lo regresara en formato JSON
    }catch(err){
        res.send('error' + err);
    }
})   

router.get('/:id', async(req,res) =>{               //Aqui buscaremos en las base de datos pero por id mediante la URL
    try{
        const producto = await Producto.findById(req.params.id).lean().select({"producto.Nombre": 1, "producto.Descripcion": 1});     // <- Aqui especificamos que buscaremos por id  .findById(req.findById)
        res.json(producto);                                //Una vez lo enncuente lo regresara en formato JSON
        console.log(producto);
    }catch(err){
        res.send('error' + err);
    }
});



router.post('/',async(req,res) => {                            //Guardaremos el esuqema en la base de datos y especificamos que reuerimos 
   
    const producto = new Producto(
        req.body
    )
        


    try{
        const p1 = await producto.save();
        res.json(p1);
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async (req, res) =>{

    try{
        const producto = await Producto.findById(req.params.id);
        // console.log(producto.producto.Nombre)
        producto.producto.Nombre = req.body.Nombre;   
        // console.log(req.body._id)                
        const p1 = await producto.save();        //Aqui cambia y se remplaza el objeto 
        res.json(p1);                            //con esta liena responderemos el JSON que modificamos.
    }catch(err){
        res.send('Error');
        console.log(err)
    }    

})


module.exports = router;  // Exportamos el modulo que instanciamos para que puedan acceder a el. en este caso (app.js) 