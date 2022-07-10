import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import db from "../firebase/init";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const postTweet = (event) => {
    event.preventDefault();
    const post = {
      displayName: "Chair",
      username: "chair",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://m.media-amazon.com/images/I/81J5r9dANGL._SX342_.jpg",
    };
    addDoc(collection(db, "posts"), post);

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweet__box">
      <form>
        <div className="tweet__box-input">
          <Avatar
            src={
              "https://m.media-amazon.com/images/I/81J5r9dANGL._SX342_.jpg"
            }
          />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            required
            maxLength="280"
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          placeholder="Optional: Enter image URL"
          type="url"
        />
        <Button onClick={postTweet} className="tweet__box--btn">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
