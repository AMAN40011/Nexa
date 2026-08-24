import React from 'react'

const Button = ({children,className=""}) => {
  return (
    <button className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button
