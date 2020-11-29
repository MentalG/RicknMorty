import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import characher from '../test.jpeg'
import './styles.scss';

const Content = () => {
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const data = [
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
    {
      name: 'Alice',
      age: '21',
      loc: 'Kiev',
    },
  ];

  return (
    <div className='content_wrapper'>
      <div className='setting_wrapper'>
        <div className='filter_wrapper'>
          <FormControl className='filter'>
            <InputLabel id='name'>Name</InputLabel>
            <Select labelId='name' value={age} onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl className='filter'>
            <InputLabel id='age'>Age</InputLabel>
            <Select labelId='age' value={age} onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl className='filter'>
            <InputLabel id='lock'>Lock</InputLabel>
            <Select labelId='lock' value={age} onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </div>
        <ButtonGroup color='primary' className='paggination_wrapper'>
          <Button>{`<`}</Button>
          <Button>1</Button>
          <Button>{`>`}</Button>
        </ButtonGroup>
      </div>
      <Grid className='content' container>
        {data.map((item) => {
          return <Grid item xs={2} className='item'>
              <img src={characher} alt='alt' className='item_image'/>
              <div className='item_info'>{`${item.name} ${item.age} ${item.loc}`}</div>
          </Grid>;
        })}
      </Grid>
    </div>
  );
};

export default Content;
