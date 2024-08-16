const mongoose = require('mongoose');

// Asegúrate de que el nombre de la variable de entorno sea correcto
const mongoURI = process.env.MONGODB_URI;

const conectarDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error de conexión a MongoDB:', err);
        process.exit(1); // Detener el proceso si no se puede conectar
    }
};

module.exports = conectarDB;
