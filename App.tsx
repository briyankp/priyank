
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Model1Page from './components/Model1Page';
import Model2Page from './components/Model2Page';
import BusinessModelPage from './components/BusinessModelPage';
import { Header } from './components/common/Header';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onNavigate={setCurrentPage} />;
      case Page.Model1:
        return <Model1Page />;
      case Page.Model2:
        return <Model2Page />;
      case Page.BusinessModel:
        return <BusinessModelPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="p-4 md:p-8">
        {renderPage()}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; 2024 Spice Pay Digital Collection Prototype. For demonstration purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
