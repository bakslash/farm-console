// components/SearchBar.js
import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ mb: 3 , width:300}}>
      <TextField
        label="Search Products"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
