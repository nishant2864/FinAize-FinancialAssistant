
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About FinanceBot</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing personal finance management through intelligent conversation and personalized advice.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
              alt="Technology and finance" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              FinanceBot was born from the recognition that managing personal finances is one of the biggest challenges 
              people face today. With impulsive spending habits and complex financial decisions, individuals often need 
              guidance but lack access to personalized financial advice.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of financial experts and AI engineers came together to create a solution that combines the 
              accessibility of chatbot technology with the depth of professional financial guidance.
            </p>
            <p className="text-gray-600">
              Today, FinanceBot serves thousands of users, helping them make smarter financial decisions, 
              track their expenses, and achieve their financial goals through intelligent conversation.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize financial advice and make intelligent money management accessible to everyone through 
                conversational AI technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where everyone has access to personalized financial guidance, leading to better financial 
                health and prosperity for all.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="p-4 bg-purple-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Trust, transparency, and user-centric design drive everything we do. Your financial privacy and 
                success are our top priorities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
