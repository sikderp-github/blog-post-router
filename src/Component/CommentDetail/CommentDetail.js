import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const CommentDetail = (props) => {
    const { name, email, body } = props.comment;
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => setPicture(data.results));
    }, [])
    return (
        <Grid item xs={12} >
            {/* <div> 
        {
        picture.map(pic=> <UserInfo pic={pic}></UserInfo>)
    }    
        </div> */}
            <Box bgcolor="grey.200" textAlign="left" fontSize={16} fontStyle="normal" fontWeight={300} borderRadius={16} boxShadow={2} color="text.primary" p={1} m={1}>
                <h3> Name: {name},   E-mail: {email}<br /></h3>
                <h5>Comment Details : {body} </h5>
                <p>Like  .  Reply</p>
            </Box>
        </Grid>

    );
};

export default CommentDetail;