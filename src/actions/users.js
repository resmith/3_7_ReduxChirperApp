export const RECEIVE_USERS = 'RECEIVE_USERS';

export funciton receiveUsers (users){
  return {
    type: RECEIVE_USERS,
    users
  }
}
