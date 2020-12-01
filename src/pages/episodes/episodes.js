import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post';
import Content from '../../components/Content';
import { episodeSelectors } from '../../api/mockup-data';
import { dumpEpisode } from '../../utils/dumps';

const Episodes = props => {
    const dispatch = useDispatch();
    const data = useSelector(getPostsData);
    const posts = dumpEpisode(data)
    const [filters, setFilters] = useState({
      name: {
        value: '',
        type: 'input'
      },
    });
  
    useEffect(() => {
      dispatch(getPosts('episode', filters));
    }, [dispatch, filters]);
  
    return (
      <div>
        <Content
          count={data.data.info?.count}
          posts={posts}
          pagination={25}
          setFilters={setFilters}
          filters={filters}
          selectors={episodeSelectors}
          isTable={false}
        />
      </div>
    );
  };

export default Episodes
