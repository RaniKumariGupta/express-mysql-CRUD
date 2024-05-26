const express = require('express')
const dotenv = require('dotenv')
// const dbConnection = require('./config/db')
const userRouter = require('./routers/userRouter');

console.log(userRouter);

//configure dotenv
dotenv.config();

//rest object
const app = express()

//port
 const port = process.env.PORT || 5000

//middleware
app.use(express.json());   //if you wat to accpet json data fron frontend or client then use middleware default i.e express.json or body parser

//routes
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Helo hyyyyyyy');
  res.status(200);
})

//listen
app.listen(port, () => {
  console.log( `Server is running on port ${process.env.PORT}`);
});
