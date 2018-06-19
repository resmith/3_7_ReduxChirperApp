export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export funciton receiveTweets (tweets){
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}
