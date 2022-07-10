import React from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feed = () => {
  return (
    <main>
      <header className="feed__header">
        <h2>Home</h2>
      </header>

      <TweetBox />

      <Post />
      
    </main>
  );
};

export default Feed;
