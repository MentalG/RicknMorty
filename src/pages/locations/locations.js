import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import { getPosts } from '../../store/actions/post';
import Content from '../../components/Content';
import { locationSelectors } from '../../api/mockup-data';
import { dumpLocation } from '../../utils/dumps';

const Locations = props => {
    const dispatch = useDispatch();
    const data = useSelector(getPostsData);
    const posts = dumpLocation(data)
    const [filters, setFilters] = useState({
      name: {
        value: '',
        type: 'input'
      },
      type: {
        value: '',
        type: 'input'
      },
      dimension: {
        value: '',
        type: 'input'
      }
    });
  
    useEffect(() => {
      dispatch(getPosts('location', filters));
    }, [dispatch, filters]);
  
    return (
      <div>
        <Content
          count={data.data.info?.count}
          posts={posts}
          pagination={10}
          setFilters={setFilters}
          filters={filters}
          selectors={locationSelectors}
          isTable={true}
          filterType={'input'}
        />
      </div>
    );
  };

export default Locations
