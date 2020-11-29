import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './styles.scss';

const Menu = () => {
  return (
    <div className='menu_wrapper'>
      <div className='menu'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button color='primary' variant='contained'>
            Characters
          </Button>
        </Link>
        <Link to='/episodes' style={{ textDecoration: 'none' }}>
          <Button color='primary' variant='contained'>
            Episodes
          </Button>
        </Link>
        <Link to='/locations' style={{ textDecoration: 'none' }}>
          <Button color='primary' variant='contained'>
            Locations
          </Button>
        </Link>
        <Link to='/watchList' style={{ textDecoration: 'none' }}>
          <Button color='primary' variant='contained'>
            My watch list
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
