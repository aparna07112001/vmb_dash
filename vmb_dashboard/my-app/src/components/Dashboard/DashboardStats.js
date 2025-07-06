import React from 'react';
import StatCard from '../UI/StatCard';
import { dashboardStats } from '../../data/mockData';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Volunteers',
      value: dashboardStats.totalVolunteers,
      color: 'bg-white'
    },
    {
      title: 'New Applications',
      value: dashboardStats.newApplications,
      color: 'bg-white'
    },
    {
      title: 'Upcoming Events',
      value: dashboardStats.upcomingEvents,
      color: 'bg-white'
    },
    {
      title: 'Total Events',
      value: dashboardStats.totalEvents,
      color: 'bg-white'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;