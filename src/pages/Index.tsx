
import React from 'react';
import ChatInterface from '../components/ChatInterface';
import WalletSummary from '../components/WalletSummary';
import FinancialServices from '../components/FinancialServices';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
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

export default Index;
