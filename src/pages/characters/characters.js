import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post';
import Content from '../../components/Content';
import { characterSelectors } from '../../api/mockup-data';
import { dumpCharacter } from '../../utils/dumps';

const Characters = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  const posts = dumpCharacter(data)
  const [filters, setFilters] = useState({
    species: '',
    status: '',
    gender: '',
  });

  useEffect(() => {
    dispatch(getPosts('character', filters));
  }, [dispatch, filters]);

  return (
    <div>
      <Content
          info={data}
          posts={posts}
          pagination={10}
          setFilters={setFilters}
          filters={filters}
          selectors={characterSelectors}
          isTable={true}
          filterType={'selector'}
      />
    </div>
  );
};

export default Characters;
