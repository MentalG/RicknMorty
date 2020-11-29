import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Selector = props => {
  const { setFilters, filters } = props;
  const [label, setLabel] = useState('None');

  const handleChange = (event) => {
    const element = event.target;

    setFilters({...filters, [element.name]: element.value})
    setLabel(element.value);
  };

    return (
        <FormControl className='filter'>
        <InputLabel id='species'>Species</InputLabel>
        <Select name='species' labelId='species' value={label} displayEmpty onChange={handleChange}>
          <MenuItem value={''}>None</MenuItem>
          <MenuItem value={'Human'}>Human</MenuItem>
          <MenuItem value={'Alien'}>Alien</MenuItem>
          <MenuItem value={'Humanoid'}>Humanoid</MenuItem>
          <MenuItem value={'Animal'}>Animal</MenuItem>
          <MenuItem value={'Robot'}>Robot</MenuItem>
          <MenuItem value={'Cronenberg'}>Cronenberg</MenuItem>
          <MenuItem value={'Mytholog'}>Mytholog</MenuItem>
          <MenuItem value={'Disease'}>Disease</MenuItem>
          <MenuItem value={'Poopybutthole'}>Poopybutthole</MenuItem>
          <MenuItem value={'unknown'}>unknown</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Selector
