import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './styles.scss';

const Pagintaion = (props) => {
  const { setPage, page, maxPages } = props;
  
  const clickHandler = (action) => {
    const nextPage = page === 1 && action === -1 ? 1 : action + page
    if(nextPage === maxPages + 2) return 

    setPage(nextPage)
  }

  return (
    <ButtonGroup color='primary' className='pagination_wrapper'>
      <Button onClick={() => clickHandler(-1)}>{`<`}</Button>
      <Button>{page}</Button>
      <Button onClick={() => clickHandler(1)}>{`>`}</Button>
    </ButtonGroup>
  );
};

export default Pagintaion;
