import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post'
import Content from '../../components/Content';
import { characterSelectors } from '../../api/mockup-data';

const Characters = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  const [filters, setFilters] = useState({
    species: '',
    status: '',
    gender: ''
  });

  useEffect(() => {
      dispatch(getPosts('character', filters))
  }, [dispatch, filters]);

  return (
    <div>
      <Content characters={data} pagination={10} setFilters={setFilters} filters={filters} selectors={characterSelectors}/>
    </div>
  );
};

export default Characters;
