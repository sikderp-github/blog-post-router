import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import { Box, Grid } from '@material-ui/core';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <Grid>
      <Box bgcolor="success.main" textAlign="center" fontSize={32} fontStyle="bold" fontWeight={500} borderRadius={8} boxShadow={1} color="text.success" p={1} m={1}>Popular Blog/Post:</Box>
      <Grid >
        {
          posts.map(post => <Posts post={post} key={post.userId}></Posts>)
        }
      </Grid>

    </Grid>
  );
};

export default Home;