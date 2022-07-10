import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { VerifiedUser } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import React from "react";
import { forwardRef } from "react";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <header className="post__header">
            <div className="post__header--text">
              <h3>
                {displayName}{" "}
                <span className="post__header--special">
                  {verified && <VerifiedUser className="post__badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__header--description">
              <p>{text}</p>
            </div>
          </header>
          {image && <figure className="post__img--wrapper">
            <img src={image} alt="" />
          </figure>}
          <footer className="post__footer">
            <IconButton>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <IconButton>
              <Repeat fontSize="small" />
            </IconButton>
            <IconButton>
              <Favorite fontSize="small" />
            </IconButton>
            <IconButton>
              <Publish fontSize="small" />
            </IconButton>
          </footer>
        </div>
      </div>
    );
  }
);

export default Post;
