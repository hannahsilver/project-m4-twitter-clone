import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingWheel from "./LoadingWheel";
import moment from "moment";
import { FiArrowLeft } from "react-icons/fi";
import TweetActions from "./TweetActions";
const TweetDetails = () => {
  const { tweetId } = useParams();

  console.log(tweetId, "tweet id");
  const [tweet, setTweet] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/tweet/" + tweetId)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setTweet(data.tweet);
      });
  }, []);
  console.log(tweet, "tweet");

  console.log(tweet, "hello");
  if (tweet === null) {
    return (
      <TweetDiv>
        <LoadingWheel />
      </TweetDiv>
    );
  } else {
    return (
      <>
        <Meow>
          <FiArrowLeft />
          <MeowLink to="/">Meow</MeowLink>
        </Meow>
        <TweetDiv>
          <UserHeader>
            <Avatar src={tweet.author.avatarSrc} />
            <UserInfo>
              <DisplayNameLink to={`/${tweet.author.handle}`}>
                <DisplayName>{tweet.author.displayName}</DisplayName>
              </DisplayNameLink>
              <p>@{tweet.author.handle}</p>
            </UserInfo>
          </UserHeader>
          <Status>{tweet.status}</Status>
          {tweet.media.length > 0 && <Media src={tweet.media[0].url} />}
          <Timestamp>
            {moment(tweet.timestamp).format("h:mm A · MMM Do, YYYY")}
          </Timestamp>
          <TweetActions
            isLiked={tweet.author.isLiked}
            isRetweeted={tweet.author.isRetweeted}
            numLikes={tweet.author.numLikes}
            numRetweets={tweet.author.likedBy}
            retweetedBy={tweet.author.retweetedBy}
            tweetId={tweet.id}
          />
        </TweetDiv>
      </>
    );
  }
};

const Meow = styled.div`
  display: flex;
  width: 680px;
  position: relative;
  left: 300px;
  padding: 20px;
  border: 1px solid lightgrey;
`;

const MeowLink = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: black;
`;
const TweetDiv = styled.div`
  border: 1px solid lightgrey;
  padding: 20px 60px;
  left: 300px;
  position: relative;
  width: 600px;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
`;
const UserInfo = styled.div`
  padding: 20px;
`;
const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

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

const Status = styled.p`
  font-size: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const Media = styled.img`
  height: 400px;
  width: 500px;
  border-radius: 20px;
  object-fit: cover;
`;

const Timestamp = styled.p`
  padding: 20px;
`;
export default TweetDetails;
