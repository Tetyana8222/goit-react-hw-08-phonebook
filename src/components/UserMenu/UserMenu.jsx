import { useDispatch, useSelector } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../img/defaultAvatar.png';
import authOperations from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="" width="20" />
      <span> Welcome {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
