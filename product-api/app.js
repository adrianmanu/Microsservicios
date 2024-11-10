// app.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// Configuración de conexión a PostgreSQL
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: 5432
});

app.use(express.json());

// Ruta para obtener todos los productos
app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ruta para agregar un nuevo producto
app.post('/products', async (req, res) => {
  const { name, price, stock, proveedor } = req.body;  // Recibe 'stock' y 'proveedor' también
  try {
    // Asegúrate de incluir 'stock' y 'proveedor' en la consulta
    const result = await pool.query(
      'INSERT INTO products (name, price, stock, proveedor) VALUES ($1, $2, $3, $4) RETURNING *', 
      [name, price, stock, proveedor]  // Pasa los cuatro valores
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
