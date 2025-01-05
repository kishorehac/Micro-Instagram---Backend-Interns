require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
