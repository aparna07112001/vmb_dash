import React from 'react';
import { activeVolunteers } from '../../data/mockData';

const ActiveVolunteers = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Active Volunteers</h2>
      <div className="space-y-3">
        {activeVolunteers.map((volunteer, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {volunteer.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium text-gray-800">{volunteer.name}</div>
                <div className="text-sm text-gray-500">{volunteer.events} Events</div>
              </div>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${(volunteer.events / 60) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveVolunteers;