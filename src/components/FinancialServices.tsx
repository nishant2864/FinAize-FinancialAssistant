
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Bell, FileText, User } from 'lucide-react';

const FinancialServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Account Statements",
      description: "View and download your financial reports"
    },
    {
      icon: Bell,
      title: "Payment Alerts",
      description: "Get notified about upcoming payments"
    },
    {
      icon: Settings,
      title: "Budget Planning",
      description: "Set and track your financial goals"
    },
    {
      icon: User,
      title: "Customer Support",
      description: "24/7 assistance for your queries"
    }
  ];

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">
          Financial Services
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            >
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                <service.icon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{service.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialServices;
