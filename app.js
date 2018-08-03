const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)

const init = async () => {
  await models.User.sync({ force: true })
  await models.Page.sync({ force: true })

  app.get('/', (req, res) => {
    res.redirect('/wiki')
  })

  app.listen('3000', console.log('Listening...'));

}

models.db.authenticate().
  then(async () => {
    console.log('CONNECTED to the database');
  })

init();
