import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const HealthRecordDetail = ({ record, onClose, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecord, setEditedRecord] = useState(record);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editedRecord);
    setIsEditing(false);
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box sx={{ width: 400, margin: '50px auto', backgroundColor: 'white', padding: 4 }}>
        <IconButton onClick={onClose} style={{ float: 'right' }}>
          <CloseIcon />
        </IconButton>

        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <Typography variant="h6" gutterBottom>Edit Health Record</Typography>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={editedRecord.date}
              onChange={(e) => setEditedRecord({ ...editedRecord, date: e.target.value })}
              required
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Body Temperature (°C)"
              value={editedRecord.bodyTemperature}
              onChange={(e) => setEditedRecord({ ...editedRecord, bodyTemperature: e.target.value })}
              required
            />

            <TextField
              fullWidth
              label="Body Temperature (°C)"
              value={editedRecord.bodyTemperature}
              onChange={(e) => setEditedRecord({ ...editedRecord, bodyTemperature: e.target.value })}
              required
            />

            <TextField
              fullWidth
              label="Blood Pressure"
              value={editedRecord.bloodPressure}
              onChange={(e) => setEditedRecord({ ...editedRecord, bloodPressure: e.target.value })}
              required
            />
            <TextField
              fullWidth
              label="Heart Rate"
              value={editedRecord.heartRate}
              onChange={(e) => setEditedRecord({ ...editedRecord, heartRate: e.target.value })}
              required
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Save Changes
            </Button>
          </form>
        ) : (
          <div>
            <Typography variant="h6" gutterBottom>Health Record Details</Typography>
            <Typography>Date: {record.date}</Typography>
            <Typography>Body Temperature: {record.bodyTemperature}°C</Typography>
            <Typography>Blood Pressure: {record.bloodPressure}</Typography>
            <Typography>Heart Rate: {record.heartRate} bpm</Typography>

            <Box mt={2}>
              <Button onClick={() => setIsEditing(true)} variant="outlined" fullWidth>Edit</Button>
              <Button onClick={() => onDelete(record.id)} color="secondary" variant="contained" fullWidth>Delete</Button>
            </Box>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default HealthRecordDetail;
