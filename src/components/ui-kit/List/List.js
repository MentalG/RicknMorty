import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

const List = (props) => {
  const { posts } = props;
  const titles = posts ? Object.keys(posts[0]) : null;

  return (
    <>
      {posts?.map((post, key) => {
        const isImage = !!post.image;

        return (
          <Grid className='list_item' item xs={4} key={post.name + key}>
            {isImage ? (
              <img alt='alt' src={post.image} className='item_image' />
            ) : null}
            <div className='item_info'>
              {titles?.map((title, key) => {
                return (
                  <Typography key={title + key}>
                    {title !== 'image'
                      ? `${title.charAt(0).toUpperCase() + title.slice(1)} - ${
                          post[title]
                        }`
                      : ``}
                  </Typography>
                );
              })}
            </div>
          </Grid>
        );
      })}
    </>
  );
};

export default List;
