import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
