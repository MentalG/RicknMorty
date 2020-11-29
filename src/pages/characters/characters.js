import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post'
import Content from '../../components/Content';

const Characters = (props) => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);

  useEffect(() => {
      dispatch(getPosts('character'))
  }, [dispatch]);

  return (
    <div>
      <Content characters={data} pagination={10}/>
    </div>
  );
};

export default Characters;
