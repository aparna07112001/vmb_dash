import React from 'react';
import DashboardStats from './DashboardStats';
import EventsChart from './EventsChart';
import Calendar from './Calendar';
import UpcomingEvents from './UpcomingEvents';
import ActiveVolunteers from './ActiveVolunteers';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">🔔</span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <DashboardStats />
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Events Chart */}
        <div className="lg:col-span-2">
          <EventsChart />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <UpcomingEvents />
          <Calendar />
        </div>
      </div>
      
      {/* Active Volunteers */}
      <div className="mt-6">
        <ActiveVolunteers />
      </div>
    </div>
  );
};

export default Dashboard;