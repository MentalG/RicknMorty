import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Selector = props => {
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <FormControl className='filter'>
        <InputLabel id='name'>Name</InputLabel>
        <Select labelId='name' value={age} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Selector
