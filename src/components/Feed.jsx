import React from "react";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase/init";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(query(collection(db, "posts")), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <main>
      <header className="feed__header">
        <h2>Home</h2>
      </header>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            text={post.text}
            verified={post.verified}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </main>
  );
};

export default Feed;
