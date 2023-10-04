const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
const connectDB = mongoose.connect('mongodb+srv://645021000882:gOPa9vdF9xo5KoCw@cluster0.hs4dwbg.mongodb.net/Posts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((client) => {
    console.log('Connected to MongoDB Atlas');
    const db = client.connection.db;
  })
  .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));

module.exports = connectDB;
