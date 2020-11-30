import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Selector = (props) => {
  const { setFilters, filters, filter, selectors } = props;
  const [label, setLabel] = useState('None');

  const handleChange = (event) => {
    const element = event.target;

    setFilters({ ...filters, [element.name]: element.value });
    setLabel(element.value);
  };

  return (
    <FormControl className='filter'>
      <InputLabel id={filter}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </InputLabel>
      <Select
        name={filter}
        labelId={filter}
        value={label}
        displayEmpty
        onChange={handleChange}
      >
        <MenuItem value={''}>None</MenuItem>
        {selectors[filter].map((item, key) => {
          return <MenuItem value={item} key={key}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Selector;
