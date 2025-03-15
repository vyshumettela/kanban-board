import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Search Tasks"
      variant="outlined"
      value={query}
      onChange={handleChange}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default SearchBar;