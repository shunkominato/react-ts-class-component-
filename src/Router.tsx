// import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AAA from './pages/AAA';
import BBB from './pages/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AAA />} />
        <Route path='/BBB' element={<BBB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
