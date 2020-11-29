import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post'
import Content from '../../components/Content';

const Characters = (props) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    species: '',
    status: '',
    gender: ''
  });
  const data = useSelector(getPostsData);

  useEffect(() => {
      dispatch(getPosts('character', filters))
      console.log(filters);
  }, [dispatch, filters]);

  return (
    <div>
      <Content characters={data} pagination={10} setFilters={setFilters} filters={filters}/>
    </div>
  );
};

export default Characters;
