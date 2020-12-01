import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
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

const Input = (props) => {
  const { filter, setFilters, filters, setPage } = props;
  const classes = useStyles();
  const text = filter.charAt(0).toUpperCase() + filter.slice(1)

  const handleChange = (event) => {
    const element = event.target;
    element.type = filters[filter].type

    setPage(1)
    setFilters({ ...filters, [element.name]: { value: element.value, type: element.type } });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={filter}>
        {text}
      </InputLabel>
      <BootstrapInput name={filter} key={filter} onChange={handleChange} />
    </FormControl>
  );
};

export default Input;
