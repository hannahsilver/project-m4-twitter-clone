import React from "react";
import Tweet from "./Tweet";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components";

const HomeFeed = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  const [twitterFeed, setTwitterFeed] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTwitterFeed(data);
      });
  }, []);
  console.log(twitterFeed);
  if (twitterFeed === null) {
    return <div>loading...</div>;
  } else {
    return (
      <TwitterFeed>
        {twitterFeed.tweetIds.map((tweetId) => {
          return <Tweet tweet={twitterFeed.tweetsById[tweetId]}></Tweet>;
        })}
      </TwitterFeed>
    );
  }
};

const TwitterFeed = styled.div`
  border: 2px solid red;
`;

export default HomeFeed;
