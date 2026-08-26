import React from 'react'

const TrustedCompanies = () => {
     
    const companies = [
  { name: "Google", logo: "/google.png" },
  { name: "Microsoft", logo: "/microsoft.png" },
  { name: "Amazon", logo: "/amazon.png" },
  { name: "Meta", logo: "/Meta2.png" },
  { name: "Notion", logo: "/Notion.png" },
  { name: "Spotify", logo: "/Zoho2.png" },
];

  return (
    <section className=" bg-blue-50">
  <div className="max-w-7xl mx-auto px-2 py-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 items-center gap-8">
      
      <p className=" text-sm font-medium text-gray-500">
        Trusted by innovative companies
      </p>

      {companies.map((company) => (
        <img
          key={company.name}
          src={company.logo}
          alt={company.name}
          className="h-8 w-auto max-w-[140px] mx-auto cursor-pointer  transition-all duration-300"
        />
      ))}

    </div>
  </div>
</section>
  )
}

export default TrustedCompanies
