import { setLocalStorage } from '../../logics/localStore';
import userURL from '../../logics/urls';

const FETCH_USERS = 'users/FETCH_USERS';
const POST_USER = 'users/POST_USER';

const initialState = [];

const getUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const postUser = (payload) => ({
  type: POST_USER,
  payload,
});

export const fetchUsers = () => (dispatch) => {
  fetch(userURL).then((res) => res.json()).then((data) => {
    dispatch(getUsers(data.data));
  });
};

export const signup = (user) => (dispatch) => {
  fetch(userURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'SUCCESS') {
        dispatch(postUser(user));
        const localData = { user_id: user.id, loggedIn: true };
        setLocalStorage(localData);
      }
    });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
    case POST_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default userReducer;
