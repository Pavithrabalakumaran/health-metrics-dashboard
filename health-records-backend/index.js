const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (replace <your-mongo-url> with the actual MongoDB connection string)
mongoose.connect('<your-mongo-url>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
const healthRecordRoutes = require('./routes/healthRecords');
app.use('/health-records', healthRecordRoutes);

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
