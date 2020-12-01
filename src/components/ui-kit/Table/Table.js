import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './styles.scss'

const Table = props => {
    const { post } = props;
    
    return (
        <Grid className='table_item' item xs={12}>
        <div className='item_info'>
          {Object.keys(post).map((field, key) => {
            return (
              <Typography key={field + key} className={'table_item_text'}>{`${field.charAt(0).toUpperCase() + field.slice(1)}: ${post[field]} `}</Typography>
            );
          })}
        </div>
      </Grid>
    )
}

export default Table
