const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


let products = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend files

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
  const newProduct = {
    id: Date.now(), // unique ID using timestamp
    name: req.body.name,
    details: req.body.details,
    owner: req.body.owner,
    price: req.body.price,
    category: req.body.category,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(product => product.id !== id);
  res.json({ message: 'Product deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
