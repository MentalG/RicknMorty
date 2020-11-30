import React, { useState } from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  };
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const Selector = (props) => {
  const { setFilters, filters, filter, selectors, filterType } = props;
  const [label, setLabel] = useState('None');
  const classes = useStyles();

  const handleChange = (event) => {
    const element = event.target;

    setFilters({ ...filters, [element.name]: element.value });
    setLabel(element.value);
  };

  const renderSelector = () => {
    return (
      <Select
        name={filter}
        labelId={filter}
        value={label}
        onChange={handleChange}
      >
        <MenuItem value={''}>None</MenuItem>
        {selectors[filter]?.map((item, key) => {
          return (
            <MenuItem value={item} key={key}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    );
  };

  const renderInput = () => {
    console.log(selectors[filter]);
    return (
      selectors[filter]?.map((item) => {
        return (
          <BootstrapInput name={item} key={item} onChange={handleChange}/>
        );
      })
    );
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={filter}>
        {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </InputLabel>
      {filterType === 'selector' ? renderSelector() : null}
      {filterType === 'input' ? renderInput() : null}
    </FormControl>
  );
};

export default Selector;
