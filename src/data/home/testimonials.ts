export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const featuredTestimonial: Testimonial = {
  name: "Senior Project Leader",
  role: "Program Director",
  company: "Healthcare Organisation",
  image: "/images/testimonial-placeholder.jpg",
  quote:
    "Kompasion Consultancy completely transformed the way our leadership team approaches execution, collaboration and strategic thinking. The practical coaching created measurable improvements across the organisation.",
};

export const testimonials: Testimonial[] = [
  {
    name: "Project Manager",
    role: "Senior Manager",
    company: "Pharmaceutical Industry",
    image: "/images/testimonial-placeholder.jpg",
    quote:
      "Navigator gave me confidence to lead cross-functional programs with clarity and influence.",
  },
  {
    name: "Operations Leader",
    role: "Operations Head",
    company: "Manufacturing",
    image: "/images/testimonial-placeholder.jpg",
    quote:
      "The coaching was practical, engaging and immediately applicable to our leadership challenges.",
  },
];