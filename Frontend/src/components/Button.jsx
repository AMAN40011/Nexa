import React from 'react'

const Button = ({children,className="",variant = "primary" }) => {

  const styles = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors transition-transform duration-300 hover:-translate-y-1",
    terniary:"bg-white text-blue-600 hover:bg-gray-100",
};

  return (
   <button
  className={`px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer ${styles[variant]} ${className}`}
>
  {children}
</button>
  )
}

export default Button
