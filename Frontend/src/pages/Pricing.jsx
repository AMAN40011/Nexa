import React from "react";
import Button from "../components/Button";
import PricingCard from "../components/PricingCard";

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
        <PricingCard
          title="Basic"
          price="$49"
          description="Perfect for small businesses."
          features={["Responsive Website", "5 Pages", "Basic Support"]}
        />
        <PricingCard
          title="Professional"
          price="$99"
          description="For growing businesses."
          features={["Responsive Website", "10 Pages", "Priority Support"]}
          popular={true}
        />

        <PricingCard
          title="Enterprise"
          price="$199"
          description="For large businesses."
          features={["Custom Website", "Unlimited Pages", "24/7 Support"]}
        />
      </div>
    </section>
  );
};

export default Pricing;
