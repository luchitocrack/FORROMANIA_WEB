import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'panel-user.c5y6i6ukao7b.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'fontecperu2024',
    database: 'Forromania' // Reemplaza con el nombre de tu base de datos
});

// Conexión a la base de datos
connection.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener los productos
app.get('/api/productos', (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            return res.status(500).json({ error: 'Error al obtener los productos' });
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
