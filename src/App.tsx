import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { TopMenu } from './page/top-menu';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<TopMenu/>} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
