const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 3499,
    description: 'Lekki laptop do pracy i nauki.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
  },
  {
    id: 2,
    name: 'Smartfon',
    price: 1899,
    description: 'Telefon z dobrym aparatem i mocną baterią.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
  },
  {
    id: 3,
    name: 'Słuchawki',
    price: 299,
    description: 'Bezprzewodowe słuchawki z redukcją szumów.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
  }
];

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

app.get('/api/health', (request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/products', (request, response) => {
  response.json(products);
});

app.get('/api/products/:id', (request, response) => {
  const id = Number.parseInt(request.params.id, 10);
  const product = products.find((item) => item.id === id);

  if (!product) {
    response.status(404).json({ message: 'Product not found' });
    return;
  }

  response.json(product);
});

app.post('/api/orders', (request, response) => {
  const { customerName, items } = request.body;

  if (typeof customerName !== 'string' || customerName.trim().length < 2) {
    response.status(400).json({ message: 'Customer name is required' });
    return;
  }

  if (!Array.isArray(items) || items.length === 0) {
    response.status(400).json({ message: 'Order must contain products' });
    return;
  }

  const order = {
    id: Date.now(),
    customerName: customerName.trim(),
    items,
    createdAt: new Date().toISOString()
  };

  response.status(201).json(order);
});

app.use((request, response) => {
  response.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
