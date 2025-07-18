// src/pages/Home.jsx
import React from 'react';
import Button from '../components/button';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Reusable Button Component Demo</h1>

      <Button variant="primary" size="md" onClick={() => alert('Primary clicked')}>Primary</Button>
      <Button variant="secondary" size="sm" onClick={() => alert('Secondary clicked')}>Secondary Small</Button>
      <Button variant="danger" size="lg" onClick={() => alert('Danger clicked')}>Danger Large</Button>
      <Button variant="success" onClick={() => alert('Success clicked')}>Success</Button>
      <Button variant="warning" disabled>Warning Disabled</Button>
    </div>
  );
};

export default Home;
