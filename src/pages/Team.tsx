
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      bio: "Former Goldman Sachs analyst with 10+ years of experience in financial planning and investment strategy.",
      linkedin: "#",
      email: "sarah@financebot.com"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      bio: "AI researcher and former Google engineer specializing in natural language processing and machine learning.",
      linkedin: "#",
      email: "michael@financebot.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      bio: "Product strategist with expertise in fintech and user experience design. Previously at Stripe and Square.",
      linkedin: "#",
      email: "emily@financebot.com"
    },
    {
      name: "David Kim",
      role: "Lead Financial Advisor",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
      bio: "Certified Financial Planner (CFP) with 15+ years helping individuals and families achieve financial goals.",
      linkedin: "#",
      email: "david@financebot.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of financial experts, AI engineers, and product specialists work together to bring you 
            the best personal finance experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-6">
            We're always looking for talented individuals who share our passion for democratizing financial advice.
          </p>
          <a 
            href="mailto:careers@financebot.com" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            careers@financebot.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
