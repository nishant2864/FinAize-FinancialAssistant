
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { MessageSquare, Shield, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Intelligent Chat",
      description: "Get personalized financial advice through our AI-powered chatbot"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is protected with bank-level security"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Track your spending patterns and get insights to improve your finances"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Access to financial experts and 24/7 customer support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Personal <span className="text-blue-600">Financial Assistant</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get personalized financial advice, track your expenses, and make smarter money decisions with our AI-powered chatbot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/financebot">
              <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700">
                Start Chatting Now
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FinanceBot?</h2>
          <p className="text-lg text-gray-600">Powerful features to help you manage your finances better</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8">Join thousands of users who trust FinanceBot for their financial decisions</p>
          <NavLink to="/financebot">
            <Button className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
