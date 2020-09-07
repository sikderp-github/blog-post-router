import React from 'react';

const UserInfo = (props) => {
    const { picture } = props.pic;
    return (
        <div>
            <img src={picture.thumbnail} alt="" />
        </div>
    );
};

export default UserInfo;