import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { LoginPage } from './page/login-page';
import { TopMenu } from './page/top-menu';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<LoginPage/>} path="/login" />
          <Route element={<TopMenu/>} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
