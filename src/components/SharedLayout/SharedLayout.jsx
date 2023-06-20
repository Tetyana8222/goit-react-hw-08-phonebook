import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/App.styled';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
