import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <GlobalStyle />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
