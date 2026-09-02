import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder, TechStart",
      message:
        "NexaTech transformed our idea into a powerful digital product. Their team was professional, creative, and very supportive.",
      image: "/p3.png",
    },
    {
      name: "Priya Mehta",
      role: "CEO, InnovateX",
      message:
        "Excellent work and outstanding support. They delivered our project on time and exceeded our expectations.",
      image: "/p2.png",
    },
    {
      name: "Neha Verma",
      role: "Founder, SoftSolutions",
      message:
        "The team understood our requirements perfectly and delivered an amazing result. Highly recommended.",
      image: "/p1.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-600">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          Testimonials
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>

        <p className="mt-3 text-gray-600">
          See what our clients have to say about working with us.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl text-blue-600">“</div>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {testimonial.message}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-11 h-11 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold">{testimonial.name}</p>

                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
