import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import Selector from '../ui-kit/Selector';
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
    info,
    posts,
    filterType,
  } = props;
  const { isLoading } = useSelector(getPostsData);
  const sortedPosts = posts?.slice(pagination * (page - 1), pagination * page);

  const renderSelectors = () => {
    return (
      <div className='filter_wrapper'>
        {Object.keys(filters)?.map((filter) => {
          return (
            <Selector
              setFilters={setFilters}
              filters={filters}
              filter={filter}
              selectors={selectors}
              key={filter}
              filterType={filterType}
            />
          );
        })}
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
      <Pagination setPage={setPage} page={page} maxPage={info?.pages} />
    </div>
  );
};

export default Content;
