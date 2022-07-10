import { Search } from "@mui/icons-material";
import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <aside className="widgets">
      <div className="widgets__input">
        <Search className="widgets__search-icon" />
        <input placeholder="Search Twitter" />
      </div>

      <div className="widgets__container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1543680638787649536"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GMHikaru"
          options={{ height: 400 }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
