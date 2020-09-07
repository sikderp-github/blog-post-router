import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';
import { Box, Grid } from '@material-ui/core';

const Comments = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState([]);
    const [comment, setComment ] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [])

    useEffect(()=>{
        const url1 = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        fetch(url1)
        .then(res=>res.json())
        .then(data=>setComment(data))
    }, []);
    return (
      <Grid item xs={12}>
        <Box borderRadius="borderRadius" textAlign="left" fontWeight={300} p={2} m={1}>
            <div>
            <Box bgcolor="info.main" textAlign="center" fontSize={28} fontStyle="bold" fontWeight={700} borderRadius={4} boxShadow={1} color="text.success" p={1} m={1}>Details of the post:</Box>
          <h2>Title:{postDetail.title} </h2>
          <h4>Text: {postDetail.body} </h4>
          <hr/>
          <h3>Comments: </h3>
          <hr/>
            </div>  
          {
              comment.map(comment=> <CommentDetail comment={comment} key={comment.id}></CommentDetail>)
          }
            </Box>
      </Grid>
      
        );
};

export default Comments;