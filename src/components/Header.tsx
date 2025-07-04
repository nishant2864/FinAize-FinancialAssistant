
import React from 'react';
import { Wallet } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FinanceBot</h1>
              <p className="text-sm text-gray-600">Your Personal Financial Assistant</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome back, John</span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">J</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
