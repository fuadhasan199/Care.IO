"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, Phone, IdCard, Check, X, ArrowRight } from 'lucide-react';
import { postUser } from '@/app/actions/server/auth';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nid: '',
    name: '',
    email: '',
    contact: '',
    password: '',
  }); 
  const router=useRouter()

  // Password validation checks
  const passwordRules = {
    length: formData.password.length >= 6,
    uppercase: /[A-Z]/.test(formData.password),  
    lowercase: /[a-z]/.test(formData.password),  
  };

  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleSubmit =async (e) => {
    e.preventDefault() 
    setLoading(true)
    setError('') 

    const result=await postUser(formData) 
     if (!result.success) {
      setError(result.message || "Registration failed");
      setLoading(false);
      return;
    } 
    // signUp then automatic sign in
     const signInResult = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
         setLoading(false); 

           if (signInResult?.error) {
      router.push('/login');
    } else {
      router.push('/');
    }
   
  };

  const handleGoogleSignUp = () => {
   
    // Google Auth Logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Create Account</h2>
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
                placeholder="Your Name"
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
          {error && (
  <p className="text-sm text-red-500 text-center">{error}</p>
)}
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

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-3 text-slate-500 dark:text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign-up Button */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full py-2.5 px-4 flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          Register with Google
        </button>

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
  );
};

export default Register;