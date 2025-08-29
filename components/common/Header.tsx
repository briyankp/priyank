
import React from 'react';
import { Page } from '../../types';
import { WalletIcon } from '../icons';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { page: Page.Home, label: 'Home' },
    { page: Page.Model1, label: 'Model 1: B2C QR' },
    { page: Page.Model2, label: 'Model 2: B2B QR' },
    { page: Page.BusinessModel, label: 'Business & Revenue' },
  ];

  const getNavItemClass = (page: Page) => {
    return currentPage === page
      ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
      : 'text-gray-500 hover:text-indigo-600 transition-colors';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
            <WalletIcon className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Spice Pay Digital Collections</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium pb-1 ${getNavItemClass(item.page)}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
