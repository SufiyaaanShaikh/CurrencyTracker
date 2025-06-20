import React, { useContext } from 'react';
import { ThemeContext } from '../common/ThemeProvider';
import { Quote, Star, Award, ShieldCheck, Users } from 'lucide-react';
import testimonialImage from "../../assets/Testimonial.svg"
import testimonialImagewhite from "../../assets/Testimonialwhite.svg"

export const TestimonialsSection = () => {
  const { isDark } = useContext(ThemeContext);

  const testimonials = [
    {
      quote: "Currency Tracker saved me hundreds on international transfers. The historical data helped me pick the perfect exchange day.",
      author: "Sarah K., Freelance Designer",
      rating: 5
    },
    {
      quote: "As a small business owner, I rely on their accurate rates to price my overseas products competitively.",
      author: "Michael T., E-commerce Entrepreneur",
      rating: 4
    }
  ];

  const trustBadges = [
    { icon: <Award size={24} />, label: "FinTech Award Winner 2023" },
    { icon: <ShieldCheck size={24} />, label: "256-bit SSL Encryption" },
    { icon: <Users size={24} />, label: "50,000+ Monthly Users" }
  ];

  return (
    <section className={`py-16 ${isDark ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Trusted by Financial Enthusiasts
          </h2>
          <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Join thousands who manage currencies smarter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-white'} shadow-sm`}
              >
                <Quote className={`w-6 h-6 mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-300'}`} />
                <p className={`mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    {testimonial.author}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 
                          (isDark ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500 fill-yellow-500') : 
                          (isDark ? 'text-zinc-600' : 'text-zinc-300')} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className={`mb-8 p-8 rounded-xl flex justify-center ${isDark ? 'bg-zinc-800' : 'bg-white'} shadow-sm`}>
              <img 
                src={isDark ? 
                  testimonialImagewhite : 
                  testimonialImage} 
                alt="User feedback" 
                className="w-full max-w-xs"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/400x300?text=User+Feedback";
                }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg flex flex-col items-center text-center ${isDark ? 'bg-zinc-800' : 'bg-white'} shadow-xs`}
                >
                  <div className={`p-2 rounded-full mb-2 ${isDark ? 'bg-zinc-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    {badge.icon}
                  </div>
                  <p className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};