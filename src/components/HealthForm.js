import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const HealthForm = ({ addRecord }) => {
  const [date, setDate] = useState('');
  const [bodyTemperature, setBodyTemperature] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: Date.now(),
      date,
      bodyTemperature,
      bloodPressure,
      heartRate,
    };
    addRecord(newRecord);
    setDate('');
    setBodyTemperature('');
    setBloodPressure('');
    setHeartRate('');
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add Health Record
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Body Temperature (°C)"
              value={bodyTemperature}
              onChange={(e) => setBodyTemperature(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Blood Pressure (systolic/diastolic)"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              label="Heart Rate (bpm)"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default HealthForm;
