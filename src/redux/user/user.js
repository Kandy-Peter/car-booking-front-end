import userURL from '../../logics/urls';

const FETCH_USERS = 'users/FETCH_USERS';
const POST_USER = 'users/POST_USER';

const initialState = [];

const getUsers = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const purgeUsers = (payload) => ({
  type: POST_USER,
  payload,
});

export const fetchUsers = () => (dispatch) => {
  console.log('working');
  fetch(userURL).then((res) => res.json()).then((data) => {
    console.log(data);
    dispatch(getUsers(data));
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
