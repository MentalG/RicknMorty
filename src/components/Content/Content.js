import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import Filter from '../ui-kit/Filter';
import Pagination from '../ui-kit/Pagination';
import Loader from '../ui-kit/Loader';
import Table from '../ui-kit/List';
import List from '../ui-kit/Table';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const Content = (props) => {
  const [page, setPage] = useState(1);
  const {
    pagination,
    setFilters,
    filters,
    selectors,
    isTable,
    count,
    posts,
  } = props;
  const { isLoading } = useSelector(getPostsData);
  const sortedPosts = posts?.slice(pagination * (page - 1), pagination * page);
  const maxPages = Math.floor(count / pagination);

  const renderSelectors = () => {
    return (
      <div className='filter_wrapper'>
            <Filter
              setFilters={setFilters}
              filters={filters}
              selectors={selectors}
            />
      </div>
    );
  };

  const renderPosts = () => {
    return sortedPosts?.map((post, key) =>
      isTable ? (
        <Table post={post} key={post.name + key} />
      ) : (
        <List post={post} key={post.name + key} />
      )
    );
  };

  return (
    <div className='content_wrapper'>
      <div className='setting_wrapper'>{renderSelectors()}</div>
      <Grid className='content' container={isTable ? true : false}>
        {isLoading ? <Loader /> : renderPosts()}
      </Grid>
      <Pagination setPage={setPage} page={page} maxPages={maxPages} />
    </div>
  );
};

export default Content;
