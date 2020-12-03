import React, { useState, useEffect } from 'react';
import { Input, Button, Typography } from '@material-ui/core';
import {
  getFromStorage,
  putInStorage,
  updateStorage,
} from '../../utils/localstorage';
import './styles.scss';

const WatchList = (props) => {
  const [list, setList] = useState(getFromStorage('list') || []);

  useEffect(() => {
    updateStorage('list', list);
  }, [list]);

  const submitHandle = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

    !!list
      ? setList([...list, { episode: value, type: '' }])
      : putInStorage('list', [{ episode: value, type: '' }]);
  };

  const clickHandle = (key, event) => {
    switch (event) {
      case 'delete':
        setList(list.filter((item, index) => index !== key));
        break;
      default:
        const newList = [...list];
        newList[key].type = event;
        setList(newList);
        break;
    }
  };

  return (
    <div className='watchList_container'>
      <form
        id='submitForm'
        className='watchList_form'
        onSubmit={(e) => submitHandle(e)}
      >
        <Input placeholder='Enter episode' name='episode' type='text' />
        <Button
          color='primary'
          variant='contained'
          type='submit'
          form='submitForm'
        >
          Add
        </Button>
      </form>
      <ul className='watchList_items_container'>
        {list?.map((item, key) => {
          return (
            <li key={item.episode + key}>
              <Typography
                className={`item_text ${
                  item.type === 'done' ? 'done' : 'undone'
                }`}
              >
                {item.episode}
              </Typography>
              <div className='item_button_container'>
                {item.type === 'done' ? (
                  <Button
                    className='item_button'
                    variant='contained'
                    color='primary'
                    onClick={(e) => clickHandle(key, 'undone')}
                  >
                    UnDone
                  </Button>
                ) : (
                  <Button
                    className='item_button'
                    variant='contained'
                    color='primary'
                    onClick={(e) => clickHandle(key, 'done')}
                  >
                    Done
                  </Button>
                )}
                <Button
                  className='item_button'
                  variant='contained'
                  color='secondary'
                  onClick={(e) => clickHandle(key, 'delete')}
                >
                  Delete
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;
