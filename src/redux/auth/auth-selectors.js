const getIsLoggedIn = state => state.auth.isLoggedin;
const getUserName = state => state.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
