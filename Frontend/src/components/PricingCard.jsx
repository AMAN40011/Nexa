import React from 'react'
import Button from "./Button";

const PricingCard = ({title,price,description,features,popular}) => {
  return (
    <div className={`relative h-full mt-6  flex flex-col gap-3 border rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
    popular ? "border-blue-600 ring-2 ring-blue-100 md:scale-105" : ""
  }`}>
    {popular && (
  <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
    Most Popular
  </span>
)}
          <h3 className="text-xl font-semibold">{title}</h3>
       
          <p className="mt-4 text-3xl font-bold">{price}</p>

          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-6 flex flex-col gap-3">
            {features.map((feature,index)=>(
                <p key={index}>✓ {feature}</p>
            ))}
          </div>
           <Button className="mt-auto  w-full">Get Started</Button>
        </div>
  )
}

export default PricingCard
