import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

const Table = (props) => {
  const { posts } = props;
  const titles = posts ? Object.keys(posts[0]) : null;

  return (
    <Grid className='table_item' item xs={12}>
      {titles?.map((title, key) => {
        return (
          <div key={key + title} className={'table_column'}>
            <Typography className='table_column_title table_text'>{(title.charAt(0).toUpperCase() + title.slice(1)).split('_').join(' ')}</Typography>
            {posts?.map((post, key) => {
              return (
                <Typography key={key} className={'table_text'}>
                  {post[title]}
                </Typography>
              );
            })}
          </div>
        );
      })}
    </Grid>
  );
};

export default Table;
