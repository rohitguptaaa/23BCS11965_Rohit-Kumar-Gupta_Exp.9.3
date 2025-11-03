const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// simple health & API
app.get('/api/hello', (req, res) => {
  res.json({ message: `Hello from backend on ${process.env.HOSTNAME || 'instance'}` });
});

app.get('/health', (req, res) => res.send('ok'));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
