const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({



  "uuid_producto": {

    "type": "String",
    "required": true,
    index: true

  },

  "producto": {

    "Nombre": {

      "type": "String"

    },

    "Descripcion": {

      "type": "String"

    },

    "NombreCorto": {

      "type": "String"

    },

    "Rubros": {

      "type": [

        "Mixed"

      ]

    }

  },

  "Subproductos": {

    "type": [

      "Mixed"

    ]

  }
});

module.exports = mongoose.model('producto', productoSchema); //Importamos el esquema