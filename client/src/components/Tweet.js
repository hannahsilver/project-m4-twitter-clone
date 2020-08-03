import React from "react";
import styled from "styled-components";

const Tweet = ({ tweet }) => {
  return (
    <TweetDiv>
      <UserHeader>
        <UserAvatar src={tweet.author.avatarSrc}></UserAvatar>
        <UserInfo>
          <DisplayName>{tweet.author.displayName}</DisplayName>
          <UserHandle>@{tweet.author.handle}</UserHandle>
        </UserInfo>
      </UserHeader>
      <TweetTitle>{tweet.status}</TweetTitle>
      <TweetMedia src={tweet.media}></TweetMedia>
      <TimeStamp>{tweet.timestamp}</TimeStamp>
    </TweetDiv>
  );
};

const TweetDiv = styled.div`
  border: 2px solid green;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserHandle = styled.span``;

const DisplayName = styled.span`
  font-weight: bold;
`;

const TweetTitle = styled.p``;

const TweetMedia = styled.img``;

const TimeStamp = styled.p``;

export default Tweet;
