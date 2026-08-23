import React from "react";

const Pricing = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold">
        Pricing Plans
      </h2>
      <p className="mt-4 text-gray-600 text-center">
        Choose the plan that works best for your business.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="h-full border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold">Basic</h3>

          <p className="mt-4 text-3xl font-bold">$49</p>

          <p className="mt-2 text-gray-600">Perfect for small businesses.</p>
          <div className="mt-6 flex flex-col gap-3">
            <p>✓ Responsive Website</p>
            <p>✓ 5 Pages</p>
            <p>✓ Basic Support</p>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="border border-blue-600 rounded-xl p-6 shadow-lg  hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
         
          <h3 className="text-xl font-semibold">Standard</h3>
          <span className="text-sm text-blue-600 font-semibold">
            Most Popular
          </span>
          <p className="font-bold text-3xl mt-4">$99</p>
          <p className="mt-2 text-gray-600">Best for growing businesses.</p>
          <div className=" mt-6 flex flex-col gap-3">
            <p>✓ Responsive Website</p>
            <p>✓ 10 Pages</p>
            <p>✓ Priority Support</p>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-color duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="h-full border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold">Premium</h3>
          <p className="mt-4 text-3xl font-bold ">$149</p>
          <p className="mt-2 text-gray-600">For businesses that need more</p>
          <div className="mt-6 flex flex-col gap-3">
            <p>✓ Responsive Website</p>
            <p>✓ Unlimited Pages</p>
            <p>✓ Premium Support</p>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
