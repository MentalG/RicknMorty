import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

const List = (props) => {
  const { post } = props;
  const isImage = !!post.image;

  return (
    <Grid className='list_item' item xs={4}>
      {isImage ? (
        <img alt='alt' src={post.image} className='item_image' />
      ) : null}
      <div className='item_info'>
        {Object.keys(post).map((field, key) => {
          return (
            <Typography key={field + key}>{field !== 'image' ? `${field.charAt(0).toUpperCase() + field.slice(1)} - ${post[field]}` : ``}</Typography>
          );
        })}
      </div>
    </Grid>
  );
};

export default List;
