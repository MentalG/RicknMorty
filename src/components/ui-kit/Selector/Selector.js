import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => {
    return {
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    };
  });

const Selector = (props) => {
  const { filters, filter, selectors, setFilters } = props;
  const [label, setLabel] = useState('None');
  const classes = useStyles();

  const handleChange = (event) => {
    const element = event.target;

    setFilters({ ...filters, [element.name]: { value: element.value } });
    setLabel(element.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={filter}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </InputLabel>
      <Select
        name={filter}
        labelId={filter}
        value={label}
        onChange={handleChange}
      >
        <MenuItem value={''}>None</MenuItem>
        {selectors[filter]?.map((item, key) => {
          return (
            <MenuItem value={item} key={item + key}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Selector;
