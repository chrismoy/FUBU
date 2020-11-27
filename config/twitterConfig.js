import dotenv from 'dotenv';

dotenv.config();

const twitterConfig = {
  access_token_key: process.env.TWITTER_PUBLIC_ACCESS,
  access_token_secret: process.env.TWITTER_PRIVATE_ACCESS,
  consumer_key: process.env.TWITTER_PUBLIC_CONSUMER,
  consumer_secret: process.env.TWITTER_PRIVATE_CONSUMER,
};

export default twitterConfig;
