const express = require('express');
const mongoose = require('mongoose');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.cargarMiddlewares();
        this.cargarRutas();
        this.conectarABD();
    }

    cargarMiddlewares() {
        this.app.use( express.urlencoded() );
    }

    cargarRutas() {
        this.app.use("/api/ingredientes", require('./routes/ingredientes'));
    }

    async conectarABD() {
        try {
          await mongoose.connect(process.env.MONGODB_URL);
          console.log("Base de datos conectada");
        } catch (ex) {
          console.error(ex);
          throw new Error("Error al conectar la BD");
        }       
        // MONGODB_URL=mongodb://localhost:27017/recetorium
      }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server corriendo en el puerto ${this.port}`);
        })        
    }
}

module.exports = Server;
