import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 rounded-2xl px-8 md:px-12 py-12 text-white">
       <div className="flex flex-col justify-start text-left"><h2 className="text-2xl md:text-3xl font-bold "> Ready to Build Something Amazing?</h2>
        <p className="mt-4 max-w-2xl text-blue-100">
          Let's work together to bring your idea to life with our expertise and innovative solution 
        </p></div> <div className="flex flex-wrap justify-center gap-3">
  <Button variant="terniary">
    Get Started →
  </Button>

  <Button className="border border-white">
    Contact Us 💬
  </Button>
</div>
        
      
      </div>
    </section>
  );
};

export default CTA;
