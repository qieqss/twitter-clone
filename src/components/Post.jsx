import { Avatar } from '@mui/material';
import React from 'react';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__header--text">
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
