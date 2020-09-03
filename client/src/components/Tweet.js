import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Link, useHistory } from "react-router-dom";
import TweetActions from "./TweetActions";
import Retweets from "./Retweets";

const Tweet = ({ tweet }) => {
  let history = useHistory();

  const tweetDetailsPage = () => {
    history.push(`/tweet/${tweet.id}`);
  };

  return (
    <TweetDiv onClick={tweetDetailsPage}>
      <Retweets tweet={tweet} />

      <UserHeader>
        <UserAvatar src={tweet.author.avatarSrc}></UserAvatar>
        <UserInfo>
          <NameDiv>
            <DisplayNameLink
              onClick={(ev) => {
                ev.stopPropagation();
              }}
              to={`/${tweet.author.handle}`}
            >
              <DisplayName>{tweet.author.displayName}</DisplayName>
            </DisplayNameLink>
            <UserHandle>@{tweet.author.handle}</UserHandle>
            <span> - {moment(tweet.timestamp).format("MMM Do")}</span>
          </NameDiv>
          <TweetTitle>{tweet.status}</TweetTitle>
        </UserInfo>
      </UserHeader>
      {tweet.media.length > 0 && <TweetMedia src={tweet.media[0].url} />}

      <div>
        <TweetActions
          isLiked={tweet.isLiked}
          isRetweeted={tweet.isRetweeted}
          numLikes={tweet.numLikes}
          numRetweets={tweet.numRetweets}
          retweetedBy={tweet.retweetedBy}
          tweetId={tweet.id}
        />
      </div>
    </TweetDiv>
  );
};

const TweetDiv = styled.div`
  border: 1px solid lightgrey;
  border-bottom: none;
  &:hover {
    cursor: pointer;
  }
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameDiv = styled.div`
  padding: 3px;
  &:hover {
    cursor: pointer;
    border-radius: 5px;
  }
`;
const UserHandle = styled.span``;

const DisplayNameLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const DisplayName = styled.span`
  font-weight: bold;
  padding-right: 10px;
`;

const TweetTitle = styled.p`
  font-size: 18px;
  padding: 10px 0;
  width: 500px;
`;

const TweetMedia = styled.img`
  margin-left: 60px;
  height: 400px;
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
`;

const TimeStamp = styled.p`
  margin-left: 60px;
  padding: 20px 0px;
`;

export default Tweet;
