import Twitter from 'twitter-v2';
import twitterConfig from 'twitterConfig.js';

export default class TwitterProcessor {
  constructor() {
    this.client = new Twitter(twitterConfig);
  }

  async getTweets(ids = {}) {
    let tweetData = {};

    try {
      tweetData = await this.client.get('users/by/username/gary_kelly', {});
    } catch(error) {
      console.error(error);
    } finally {
      console.log(tweetData);
    }
  }
}
