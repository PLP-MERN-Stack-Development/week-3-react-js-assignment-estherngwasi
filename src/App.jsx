import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ButtonDemo from './pages/ButtonDemo'; // move your button demo into a separate page
import Home from './pages/Home'; // optional extra page

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<ButtonDemo />} />
      </Routes>
    </Layout>
  );
}

export default App;
