
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import WalletSummary from '../components/WalletSummary';
import FinancialServices from '../components/FinancialServices';

const FinanceBot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">FinanceBot Assistant</h1>
          <p className="text-lg text-gray-600">Get personalized financial advice and manage your finances</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Wallet & Services */}
          <div className="lg:col-span-1 space-y-6">
            <WalletSummary />
            <FinancialServices />
          </div>
          
          {/* Right Column - Chat Interface */}
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceBot;
