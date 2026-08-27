import React from 'react'

const Card = ({icon,title,description}) => {
  return (
    <div className="group border p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
  {icon}
</div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
       <div className='mt-4'>
        <a href="#" className='text-blue-600'> Learn More → </a>
       </div>
       
      

    </div>
  )
}

export default Card
