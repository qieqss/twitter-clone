import { Avatar, Button } from "@mui/material";
import React from "react";

const TweetBox = () => {
  return (
    <div className="tweet__box">
      <form>
        <div className="tweet__box-input">
          <Avatar />
          <input placeholder="What's happening?" required/>
        </div>
        <input placeholder="Optional: Enter image URL" type="url" />
        <Button className="tweet__box--btn">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
