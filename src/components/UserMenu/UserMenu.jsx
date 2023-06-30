import { useDispatch, useSelector } from 'react-redux';
// import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../img/defaultAvatar.png';
import authOperations from 'redux/auth/auth-operations';
import {
  UserContainer,
  AvatarThumb,
  AvatarImg,
  Span,
  Button,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <UserContainer>
      <AvatarThumb>
        <AvatarImg src={avatar} alt="" width="26" />
      </AvatarThumb>

      <Span> Welcome {name}</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </UserContainer>
  );
};
export default UserMenu;
