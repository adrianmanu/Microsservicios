-- init.sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,  -- Asegúrate de que esto esté correctamente definido como NOT NULL
    proveedor VARCHAR(255) NOT NULL  -- Asegúrate de que esto esté correctamente definido como NOT NULL
);
