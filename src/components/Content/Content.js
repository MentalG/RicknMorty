import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getPostsData } from '../../store/selectors/post';
import Filter from '../ui-kit/Filter';
import Pagination from '../ui-kit/Pagination';
import Loader from '../ui-kit/Loader';
import Table from '../ui-kit/Table';
import List from '../ui-kit/List';
import PopUp from '../ui-kit/PopUp';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

const Content = (props) => {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
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
          setPage={setPage}
        />
      </div>
    );
  };

  const renderPosts = () => {
    return (
      isTable ? (
        <Table posts={sortedPosts} />
      ) : (
        <List posts={sortedPosts} setModalInfo={setModalInfo} setIsModalOpen={setIsOpen}/>
      )
    )
  };

  return (
    <div className='content_wrapper'>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen} id={modalInfo}/>
      <div className='setting_wrapper'>
        {renderSelectors()}
        <div style={{padding: '0px 10px'}}><Pagination setPage={setPage} page={page} maxPages={maxPages} /></div>
      </div>
      <Grid className='content' container={isTable ? false : true}>
        {isLoading ? <Loader /> : renderPosts()}
      </Grid>
    </div>
  );
};

export default Content;
