import React from 'react';

const StatCard = ({ title, value, color = 'bg-white' }) => {
  return (
    <div className={`${color} rounded-lg shadow-sm p-6 border border-gray-200`}>
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default StatCard;