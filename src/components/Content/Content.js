import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import Selector from '../ui-kit/Selector';
import Pagination from '../ui-kit/Pagination';
import Loader from '../ui-kit/Loader'
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const Content = (props) => {
  const [page, setPage] = useState(1);
  const { pagination, characters, setFilters, filters } = props;
  const { data } = characters;
  const { info, posts } = data;
  const { isLoading } = useSelector(getPostsData);
  const sortedPosts = posts?.slice(pagination * (page - 1), pagination * page);

  const renderSelectors = () => {
    return (
      <div className='filter_wrapper'>
        <Selector setFilters={setFilters} filters={filters}/>
        <Selector setFilters={setFilters} filters={filters}/>
        <Selector setFilters={setFilters} filters={filters}/>
      </div>
    );
  };

  const renderPosts = () => {
    return sortedPosts?.map((post) => {
      return (
        <Grid item xs={4} className='item' key={post.id}>
          <img src={post.image} alt='alt' className='item_image' />
          <div className='item_info'>{`${post.name} ${post.species} ${post.status}`}</div>
        </Grid>
      );
    });
  };

  return (
    <div className='content_wrapper'>
      <div className='setting_wrapper'>
        {renderSelectors()}
        <Pagination setPage={setPage} page={page} maxPage={info?.pages}/>
      </div>
      <Grid className='content' container>
        {isLoading ? <Loader /> : renderPosts()}
      </Grid>
    </div>
  );
};

export default Content;
