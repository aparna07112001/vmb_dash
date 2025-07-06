import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Radio, 
  MessageSquare, 
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Members', icon: Users, active: false },
    { name: 'Events', icon: Calendar, active: false },
    { name: 'Broadcast', icon: Radio, active: false },
    { name: 'Feedback', icon: MessageSquare, active: false },
    { name: 'Logout', icon: LogOut, active: false }
  ];

  return (
    <div className="w-64 bg-orange-600 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-orange-500">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-orange-600 font-bold">🌟</span>
          </div>
          <span className="font-semibold">admin dashboard</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  activeItem === item.name
                    ? 'bg-orange-700 text-white'
                    : 'text-orange-100 hover:bg-orange-700 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;