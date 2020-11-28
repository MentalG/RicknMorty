import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import RicknMortyService from '../../api/services';

const Characters = props => {
    const ricknMortyService = new RicknMortyService();
    const data = {
        rows: [{
            id: "03fdd598-b276-5632-8436-811dda053e8c",
            name: 'Alien Googah'
        }],
        columns: [{
            field: 'name',
            header: 'Name',
            width: 120
        }],
    }
    ricknMortyService.getAllData();

    return (
        <div style={{ height: '100%', width: '100%' }}>
        <DataGrid pagination {...data} />
      </div>
    )
}

export default Characters
