import React from "react";
import Tweet from "./Tweet";
import { CurrentUserContext } from "./CurrentUserContext";
import styled from "styled-components";

import LoadingWheel from "./LoadingWheel";
import Error from "./Errors/Error";

import TweetPost from "./TweetPost";
const HomeFeed = () => {
  const { currentUser, status } = React.useContext(CurrentUserContext);
  const [twitterFeed, setTwitterFeed] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTwitterFeed(data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (error === true) {
    return <Error />;
  }

  console.log(twitterFeed);
  if (twitterFeed === null) {
    return (
      <MainDiv>
        <LoadingWheel />
      </MainDiv>
    );
  } else {
    return (
      <MainDiv>
        <HomeDiv>
          <h1>Home</h1>
        </HomeDiv>

        <TweetPost />
        <TwitterFeed>
          {twitterFeed.tweetIds.map((tweetId) => {
            return <Tweet tweet={twitterFeed.tweetsById[tweetId]}></Tweet>;
          })}
        </TwitterFeed>
      </MainDiv>
    );
  }
};

const MainDiv = styled.div`
  left: 300px;
  position: relative;
  width: 600px;
`;

const HomeDiv = styled.div`
  padding: 20px;
  border: 1px solid lightgrey;
`;

const TwitterFeed = styled.div``;

export default HomeFeed;
