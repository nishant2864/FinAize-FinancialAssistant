
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      content: "FinanceBot has completely transformed how I manage my money. The personalized advice helped me save $500 monthly and plan for my dream vacation!",
      rating: 5
    },
    {
      name: "Robert Thompson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      content: "As someone who struggled with budgeting, FinanceBot's intelligent suggestions have been a game-changer. I finally feel in control of my finances.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      content: "The 24/7 availability and instant responses make FinanceBot invaluable for my business. It's like having a personal financial advisor in my pocket.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
      content: "I was skeptical about AI financial advice, but FinanceBot's accuracy and helpful insights have exceeded my expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Freelance Designer",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      content: "FinanceBot helped me understand my spending patterns and create a realistic budget. My financial stress has significantly decreased.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Recent Graduate",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      content: "Starting my career was overwhelming, but FinanceBot guided me through setting up emergency funds and investment planning. Truly grateful!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">What Our Users Say</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how FinanceBot has helped thousands of users take control of their finances and achieve their goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                {renderStars(testimonial.rating)}
                
                <p className="text-gray-700 mt-4 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Money Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
