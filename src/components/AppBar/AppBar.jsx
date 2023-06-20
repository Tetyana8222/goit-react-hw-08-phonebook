// import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import RegisterForm from 'components/RegisterForm/RegisterForm';
// import UserMenu from 'components/UserMenu/UserMenu';
// import AuthNav from 'components/AuthNav/AuthNav';
// import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      <RegisterForm />

      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
}
