import React from 'react'

const ServiceCard = () => {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 text-3xl text-blue-600">
          {icon}
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <button className="mt-5 font-medium text-blue-600 transition-colors hover:text-blue-800">
          Learn More →
        </button>
      </div>

    </div>
  )
}

export default ServiceCard
