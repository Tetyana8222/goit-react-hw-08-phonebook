import { Routes, Route } from 'react-router-dom';
// import AppBar from './AppBar/AppBar';
import HomeView from '../pages/HomeView';
import { Container } from './App.styled';

export const App = () => {
  console.log('object');
  return (
    <>
      <Container>
        {/* <AppBar /> */}
        <Routes>
          {/* <Route path="/"> */}
          <Route path="/" element={<HomeView />} />
          {/* </Route> */}
        </Routes>
      </Container>
    </>
  );
};
