import React from 'react';
import { upcomingEvents } from '../../data/mockData';

const UpcomingEvents = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="bg-orange-500 text-white px-4 py-2 rounded-t-lg">
        <h3 className="font-medium">Upcoming Events</h3>
      </div>
      <div className="p-4 space-y-3">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
            <div className="font-medium text-gray-800 text-sm mb-1">
              {event.name}
            </div>
            <div className="text-xs text-gray-500">
              {event.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;