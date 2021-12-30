const express = require('express');  // importamos el module express para poder usarlo
const mongoose = require('mongoose'); // importamos mongoose para poder usarlo   <- Esta nos permitira definir el esquema

const url = 'mongodb://localhost/Productos'; //URL para conectarnos a la base de datos de MongoDB

app = express();  //Instanciamos express
mongoose.connect(url, {useNewUrlParser:true});   //Conexión a la base de datos , el segundo parametro es para evitar una advertencia.

const con = mongoose.connection;  //La conección a la base de datos 

con.on('open', () =>        //Detecta cuando la coneccion esta establecida y lo imprime por consola ;  
{
        console.log('conectado...')
});   


app.use(express.json());   //Aqui le decimos que queremos usar el formulario de json


const routerProducto = require('./routes/productos')  // Importamos  productos.js
app.use('/productos',routerProducto)                //Middleware para que todas las solicitudes entrantes envien una solicitud al enrutador 




app.listen(9000, function(){    //funcion que sirve para escuchar al servidor, e imprimir si lo esucucha
    console.log('servidor arriba')  
})