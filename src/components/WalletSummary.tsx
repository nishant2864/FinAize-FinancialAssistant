
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, ArrowUp, ArrowDown, Calendar } from 'lucide-react';

const WalletSummary = () => {
  const walletData = {
    totalBalance: 15750.00,
    monthlyIncome: 4500.00,
    monthlyExpenses: 3200.00,
    scheduledPayments: 850.00
  };

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-lg font-semibold text-gray-900">
          <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
          Wallet Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-lg text-white">
          <p className="text-sm opacity-90">Total Balance</p>
          <p className="text-2xl font-bold">${walletData.totalBalance.toLocaleString()}</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <ArrowUp className="h-4 w-4 text-green-600 mr-2" />
              <span className="text-sm text-gray-700">Monthly Income</span>
            </div>
            <span className="font-semibold text-green-600">
              +${walletData.monthlyIncome.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <ArrowDown className="h-4 w-4 text-red-600 mr-2" />
              <span className="text-sm text-gray-700">Monthly Expenses</span>
            </div>
            <span className="font-semibold text-red-600">
              -${walletData.monthlyExpenses.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-yellow-600 mr-2" />
              <span className="text-sm text-gray-700">Scheduled Payments</span>
            </div>
            <span className="font-semibold text-yellow-600">
              ${walletData.scheduledPayments.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletSummary;
