"use client"

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  User,
  HelpCircle
} from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Query',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
            Contact Us
          </h1>
        </div>

        {/* Main Grid: Left (Info) & Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Phone & WhatsApp
                </h3>
                <div className="mt-1 space-y-0.5 text-base font-medium">
                  <p>
                    <a href="tel:01787749095" className="hover:text-indigo-600 transition-colors">
                      +880 1787-749095
                    </a>
                  </p>
                  <p>
                    <a href="tel:01628832574" className="hover:text-indigo-600 transition-colors">
                      +880 1628-832574
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Email Address
                </h3>
                <p className="mt-1 text-base font-medium">
                  <a href="mailto:fuadhasan740266@gmail.com" className="hover:text-indigo-600 transition-colors break-all">
                    fuadhasan740266@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Location
                </h3>
                <p className="mt-1 text-base font-medium">
                  Rangpur Sadar, Rangpur, Bangladesh
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Response Hours
                </h3>
                <p className="mt-1 text-base font-medium">
                  Sat - Thu: 9:00 AM - 10:00 PM
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Usually replies within 2 hours
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Send Us a Message</h2>
                <p className="text-sm text-slate-500 mt-1">
                  Have a question or feedback? Fill out the form below and we will get back to you shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-sm text-slate-500 max-w-sm">
                    Thank you for contacting us. We have received your message and will reply soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        required
                        placeholder="your name  "
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm appearance-none"
                      >
                        <option value="General Query">General Query</option>
                        <option value="Booking Support">Booking Support</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3 text-slate-400" size={18} />
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;

