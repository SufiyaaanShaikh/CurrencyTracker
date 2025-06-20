// src/pages/Contact.jsx
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../components/common/ThemeProvider';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name too short')
      .max(50, 'Name too long')
      .required('Name required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email required'),
    message: Yup.string()
      .min(10, 'Message too short')
      .required('Message required')
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      resetForm();
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  const faqs = [
    {
      question: "What does Currency Tracker do?",
      answer: "Currency Tracker helps you view and compare historical exchange rates between different currencies over time."
    },
    {
      question: "Can I see exchange rates for past dates?",
      answer: "Yes, you can select any past date or range to view the historical exchange rates between currencies."
    },
    {
      question: "Which currencies are supported?",
      answer: "We support all major global currencies, including USD, EUR, INR, GBP, JPY, and more. You can view exchange rates for any pair of these currencies."
    }
  ];

  return (
    <div className={`min-h-screen pt-20 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      <div className="max-w-7xl mx-auto py-12 pt-7">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Send us a message</h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
            Have questions about our services? We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`p-8 rounded-xl max-h-[30em] shadow-sm ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-gray-200'} h-full`}>
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-3">
                  <div className='h-20'>
                    <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={`w-full px-4 py-2 rounded-lg text-sm border ${isDark ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-white border-gray-300 text-zinc-900'}`}
                    />
                    <ErrorMessage name="name" component="div" className="mt-1 text-red-500 text-xs" />
                  </div>

                  <div className='h-20'>
                    <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      Email Address
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`w-full px-4 py-2 rounded-lg text-sm border ${isDark ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-white border-gray-300 text-zinc-900'}`}
                    />
                    <ErrorMessage name="email" component="div" className="mt-1 text-red-500 text-xs" />
                  </div>

                  <div className='h-36'>
                    <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="4"
                      className={`w-full px-4 py-2 rounded-lg text-sm border ${isDark ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-white border-gray-300 text-zinc-900'}`}
                    />
                    <ErrorMessage name="message" component="div" className="mt-1 text-red-500 text-xs" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex cursor-pointer items-center mt-5 justify-center w-full py-3 px-4 rounded-lg font-medium transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white disabled:opacity-50`}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${isDark ? 'bg-zinc-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Email</h3>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>support@currencytracker.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${isDark ? 'bg-zinc-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Phone</h3>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-4 ${isDark ? 'bg-zinc-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>Address</h3>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>123 Crypto Street, Blockchain City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`h-px ${isDark ? 'bg-zinc-700' : 'bg-gray-200'}`}></div>

            <div>
              <h3 className={`text-lg font-medium mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>FREQUENTLY ASKED QUESTIONS</h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-lg overflow-hidden transition-all ${isDark ? 'border-zinc-700' : 'border-gray-200'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex items-center justify-between p-4 text-left text-sm font-medium ${isDark ? 'hover:bg-zinc-800 text-zinc-200' : 'hover:bg-gray-50 text-zinc-800'}`}
                    >
                      <span>{faq.question}</span>
                      {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {activeIndex === index && (
                      <div className={`p-4 text-sm ${isDark ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-50 text-zinc-600'}`}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;