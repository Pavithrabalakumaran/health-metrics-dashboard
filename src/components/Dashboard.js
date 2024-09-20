import React, { useState } from 'react';
import HealthForm from './HealthForm';
import HealthRecordDetail from './HealthRecordDetail';
import SearchBar from './SearchBar';
import { Container, Grid, Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const addRecord = (newRecord) => setRecords([...records, newRecord]);
  
  const editRecord = (updatedRecord) => {
    const updatedRecords = records.map(record =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    setRecords(updatedRecords);
    setIsDetailOpen(false);
  };

  const deleteRecord = (id) => setRecords(records.filter(record => record.id !== id));

  const handleSearch = (query) => setSearchQuery(query.toLowerCase());

  const filteredRecords = records.filter(record =>
    record.date.includes(searchQuery) ||
    record.heartRate > searchQuery ||
    record.bloodPressure.includes(searchQuery)
  );

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Health Metrics Dashboard
      </Typography>

      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Health Form to add records */}
      <HealthForm addRecord={addRecord} />

      <Typography variant="h5" component="h2" gutterBottom>
        Health Records
      </Typography>

      <Grid container spacing={3}>
        {filteredRecords.map((record) => (
          <Grid item xs={12} sm={6} md={4} key={record.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {record.date}
                </Typography>
                <Typography>
                  Temp: {record.bodyTemperature}°C
                </Typography>
                <Typography>
                  Blood Pressure: {record.bloodPressure}
                </Typography>
                <Typography>
                  Heart Rate: {record.heartRate} bpm
                </Typography>

                <Box mt={2}>
                  <IconButton onClick={() => { setSelectedRecord(record); setIsDetailOpen(true); }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteRecord(record.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Health Record Detail Modal */}
      {isDetailOpen && selectedRecord && (
        <HealthRecordDetail
          record={selectedRecord}
          onClose={() => setIsDetailOpen(false)}
          onDelete={deleteRecord}
          onEdit={editRecord}
        />
      )}
    </Container>
  );
};

export default Dashboard;
