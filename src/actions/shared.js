import { getInitialData } from '../utils/api';
import { receiveUsers } from '../action/users';
import { receiveTweets } from '../action/tweets';
import { setAuthedUser } from '../action/authedUser';
const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
    .then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
