"use client"
import React, { useState } from 'react';
import { Sun, Moon, Eye, EyeOff, Lock, Mail, User, Phone, IdCard, Check, X, ArrowRight } from 'lucide-react';

const register = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nid: '',
    name: '',
    email: '',
    contact: '',
    password: '',
  });

  // Password validation checks
  const passwordRules = {
    length: formData.password.length >= 6,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
  };

  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid) return;

    console.log('Registration Submitted:', formData);
    // Redirect to Booking Page after registration
    window.location.href = '/booking';
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          
          {/* Header & Theme Switcher */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Create Account</h2>
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Fill in your information to register and proceed to booking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm"
                />
              </div>
            </div>

            {/* NID No */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                NID Number
              </label>
              <div className="relative">
                <IdCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  required
                  placeholder="123 456 7890"
                  value={formData.nid}
                  onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm"
                />
              </div>
            </div>

            {/* Email & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="name@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Contact
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="tel"
                    required
                    placeholder="+123456789"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password Validation Indicator */}
              <div className="mt-2.5 p-3 bg-slate-100 dark:bg-slate-800/60 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  {passwordRules.length ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <X size={14} className="text-slate-400" />
                  )}
                  <span className={passwordRules.length ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-500 dark:text-slate-400'}>
                    At least 6 characters
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordRules.uppercase ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <X size={14} className="text-slate-400" />
                  )}
                  <span className={passwordRules.uppercase ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-500 dark:text-slate-400'}>
                    At least 1 uppercase letter
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordRules.lowercase ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <X size={14} className="text-slate-400" />
                  )}
                  <span className={passwordRules.lowercase ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-slate-500 dark:text-slate-400'}>
                    At least 1 lowercase letter
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isPasswordValid}
              className={`w-full mt-2 py-3 px-4 font-medium rounded-xl transition-all flex items-center justify-center gap-2 group ${
                isPasswordValid
                  ? 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              }`}
            >
              Complete Registration
              <ArrowRight size={18} className={isPasswordValid ? 'group-hover:translate-x-1 transition-transform' : ''} />
            </button>
          </form>

          {/* Navigation Link */}
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default register;