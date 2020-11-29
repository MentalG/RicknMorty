import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPostsData } from '../../store/selectors/post'
import Content from '../../Content';

const Characters = (props) => {
    const data = useSelector(getPostsData);
    
    console.log(data);

  useEffect(() => {
    // const fetching = async () => {
    //     const data = await ricknMortyService.getAllData('location');
    //     console.log(data)
    // }
    // fetching();
  }, [])

//   console.log(data)

  return (
    <div>
      <Content />
    </div>
  );
};

export default Characters;
