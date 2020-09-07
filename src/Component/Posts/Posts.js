import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';


const Posts = (props) => {
    const { title, body, id } = props.post;
    const postHistory = useHistory();

    const handlePost = (postId) => {
        const url = `/posts/${postId}/comments`
        postHistory.push(url);
    }

    return (
        <Grid item xs={12}>
            <Box bgcolor="grey.200" textAlign="left" fontSize={16} fontStyle="normal" fontWeight={300} borderRadius={16} boxShadow={2} color="text.primary" p={1} m={1}>
                <h2>Title : {title}</h2>
                <h4>Details:  {body}</h4>
                <Button onClick={() => handlePost(id)} variant="contained" color="primary">
                    read more
                </Button>
            </Box>
        </Grid >
    );
};

export default Posts;