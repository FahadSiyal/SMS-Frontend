import React from 'react';

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Ranked #1 easy to use complete all-in-one school management system</h1>
          <img 
            src="/hero-dashboard.png" 
            alt="Dashboard screenshot" 
            className="mx-auto my-6 max-w-full"
          />
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold mb-2">FREE Mobile Application</h2>
        <p className="mb-4">For Parents, Students & School Staff</p>
        <img 
          src="/mobile-app.png" 
          alt="Mobile app screenshot" 
          className="mx-auto my-4 max-w-xs"
        />
        <div className="flex justify-center gap-4 mt-4">
          <img src="/google-play-badge.png" alt="Google Play" className="h-10" />
          <img src="/app-store-badge.png" alt="App Store" className="h-10" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">We Provide You Best Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Free Mobile App', 'Secure Record', 'Full Campus',
              'HR & Payroll', 'Whatsapp Integration', 'Digital Payments',
              'High-speed Server', 'Complete Accounting',
              'Biometric & AI', 'Easy Results', 'EWR Alerts', 'Customizable'
            ].map((feature, i) => (
              <div key={i} className="p-4 bg-white shadow rounded">
                <div className="text-lg font-medium">{feature}</div>
                <p className="text-sm text-gray-600 mt-2">Feature description here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Choose Pricing Plans Suits You</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            { title: 'Rs. 3000', desc: 'Single Campus Plan' },
            { title: 'Rs. 5000', desc: 'Multi Campus Plan' },
            { title: 'Rs. 10000', desc: 'Unlimited Campus Plan' }
          ].map((plan, i) => (
            <div key={i} className="p-6 bg-purple-50 border border-purple-200 rounded shadow">
              <div className="text-xl font-semibold">{plan.title}</div>
              <p className="mt-2 text-sm text-gray-700">{plan.desc}</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Is it a school software?',
              'Do you have a mobile app?',
              'Can we use it online?',
              'What type of schools use it?',
              'Is data secure?',
              'Can we export data?'
            ].map((q, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="font-medium">{q}</div>
                <p className="text-sm text-gray-600 mt-2">Answer here...</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Latest From the Blog Posts</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {['What is School System?', 'Top online school systems', 'Best school system in Pakistan'].map((post, i) => (
            <div key={i} className="bg-white p-4 rounded shadow max-w-xs">
              <div className="font-medium">{post}</div>
              <p className="text-sm text-gray-600 mt-2">Short blog summary...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-purple-700 text-white py-8">
        <div className="flex justify-center gap-8 text-center">
          <div><div className="text-2xl font-bold">1200+</div><div>Schools</div></div>
          <div><div className="text-2xl font-bold">560+</div><div>Features</div></div>
          <div><div className="text-2xl font-bold">12+</div><div>Modules</div></div>
          <div><div className="text-2xl font-bold">3+</div><div>Biometric Brands</div></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-purple-900 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Try Our School Management System for free today & Experience Endless Possibilities</h2>
        <button className="bg-orange-500 py-2 px-6 rounded mt-4">Register Now</button>
      </section>

 
    </main>
  );
}
