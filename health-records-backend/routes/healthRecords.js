const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/HealthRecord');

// POST /health-records - Create a new health record
router.post('/', async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
  try {
    const newRecord = new HealthRecord({
      date,
      bodyTemperature,
      bloodPressure,
      heartRate
    });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ message: 'Error creating record', error: err });
  }
});

// GET /health-records - Retrieve all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching records', error: err });
  }
});

// GET /health-records/:id - Retrieve a specific health record by ID
router.get('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(record);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching record', error: err });
  }
});

// PUT /health-records/:id - Update a health record
router.put('/:id', async (req, res) => {
  const { date, bodyTemperature, bloodPressure, heartRate } = req.body;
  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      { date, bodyTemperature, bloodPressure, heartRate },
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (err) {
    res.status(500).json({ message: 'Error updating record', error: err });
  }
});

// DELETE /health-records/:id - Delete a health record
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting record', error: err });
  }
});

module.exports = router;
