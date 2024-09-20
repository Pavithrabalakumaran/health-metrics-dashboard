import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="Search by date, heart rate, etc."
        fullWidth
        variant="outlined"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
