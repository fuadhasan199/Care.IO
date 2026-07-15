import { Ambulance, CalendarCheck, Lock, ShieldCheck } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900">
            About <span className="text-sky-600">Care.io</span>
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Care.io is a trusted healthcare platform designed to make medical
            appointments simple, secure, and accessible. We connect patients
            with verified healthcare professionals, ensuring quality care with
            a seamless booking experience.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-slate-900">
            Our Mission
          </h3>

          <p className="text-center text-slate-600 mt-5 max-w-3xl mx-auto leading-8">
            Our mission is to make healthcare more accessible, reliable, and
            convenient for everyone. We are committed to providing a secure
            platform where patients can confidently book appointments with
            trusted medical professionals anytime, anywhere.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-sky-100 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-sky-600" />
            </div>

            <h4 className="text-xl font-semibold mt-6 text-slate-900">
              Trusted & Verified
            </h4>

            <p className="text-slate-600 mt-3">
              Every healthcare provider is carefully verified to ensure safe,
              reliable, and professional medical services.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center">
              <Ambulance className="w-8 h-8 text-red-500" />
            </div>

            <h4 className="text-xl font-semibold mt-6 text-slate-900">
              Emergency Support
            </h4>

            <p className="text-slate-600 mt-3">
              Get quick access to trusted healthcare professionals whenever you
              need urgent medical assistance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
              <CalendarCheck className="w-8 h-8 text-emerald-600" />
            </div>

            <h4 className="text-xl font-semibold mt-6 text-slate-900">
              Flexible Booking
            </h4>

            <p className="text-slate-600 mt-3">
              Schedule appointments at your preferred date and time with a
              simple and hassle-free booking process.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-violet-100 flex items-center justify-center">
              <Lock className="w-8 h-8 text-violet-600" />
            </div>

            <h4 className="text-xl font-semibold mt-6 text-slate-900">
              Secure & Private
            </h4>

            <p className="text-slate-600 mt-3">
              Your personal information and appointment details are protected
              with strong privacy and security standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;