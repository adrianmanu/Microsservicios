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
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, proveedor } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, stock = $3, proveedor = $4 WHERE id = $5 RETURNING *',
      [name, price, stock, proveedor, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send('Producto no encontrado');
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Producto no encontrado');
    }
    res.status(204).send('Producto eliminado');
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
