import React, { useState } from 'react';
import Button from "../components/Button";



function ButtonDemo() {
  const [clicked, setClicked] = useState('');

  const handleClick = (type) => {
    setClicked(`You clicked the ${type} button`);
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">Reusable Button Component Demo</h2>

      <div className="flex flex-wrap gap-4">
        <Button onClick={() => handleClick('Primary')}>Primary</Button>
        <Button variant="secondary" onClick={() => handleClick('Secondary')}>Secondary</Button>
        <Button size="sm" onClick={() => handleClick('Small')}>Small</Button>
        <Button variant="destructive" onClick={() => handleClick('Danger')}>Danger</Button>
        <Button size="lg" onClick={() => handleClick('Large')}>Large</Button>
        <Button variant="success" onClick={() => handleClick('Success')}>Success</Button>
        <Button variant="warning" onClick={() => handleClick('Warning')}>Warning</Button>
        <Button disabled onClick={() => handleClick('Disabled')}>Disabled</Button>
      </div>

      {clicked && (
        <p className="text-lg text-green-600 font-semibold">{clicked}</p>
      )}
    </div>
  );
}

export default ButtonDemo;
