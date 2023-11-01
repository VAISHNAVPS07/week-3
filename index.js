// const express = require('express')
// var http = require('http')
// const app = express()

// http.createServer(function(req, res) {
//     res.end("Hello world")
// }) .listen(3000)

// console.log("Server is running")


// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());
// const PORT = 8000;

// const dbURL = 'mongodb+srv://Vaishnav123:Vaishnav123@cluster0.amxlfci.mongodb.net/database1';

// mongoose.connect(dbURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch((error) => {
//     console.error('Database connection error:', error);
//   });

// app.get('/', (req, res) => {
//   res.send('Hello, this is the root path!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const PORT = 8000;
const route = require('./routes/router')

mongoose.connect('mongodb+srv://Vaishnav123:Vaishnav123@cluster0.amxlfci.mongodb.net/database1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});