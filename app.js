const express = require('express');
const bodyParser = require('body-parser');
const measureRoutes = require('./routes/measureRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/measure', measureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
