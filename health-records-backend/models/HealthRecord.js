const mongoose = require('mongoose');

const HealthRecordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  bodyTemperature: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: String,
    required: true,
  },
  heartRate: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('HealthRecord', HealthRecordSchema);
