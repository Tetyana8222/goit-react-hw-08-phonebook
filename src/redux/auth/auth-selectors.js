const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
};

export default authSelectors;
