const express = require('express');
const routes = require('./controller');
const sequelize = require('./config/connection');

// starting server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

//sync sequelize 
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  });
});

module.exports = router;