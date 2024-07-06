const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB_URI = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// BEST METHOD for connection. Using IIFE with async-await
(async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('DB connection successful');
  } catch (e) {
    console.log(e.message);
  }
})();

// Second BEST METHOD using async-await and .then/.catch on async() promise

// async function connectDb() {
//   const conn = await mongoose.connect(DB_URI);
//   return conn;
// }
// connectDb()
//   .then((conn) => {
//     console.log(conn);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

// Start Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
