import { Metadata } from "next";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechStart Inc.",
    feedback: "Asif delivered an exceptional AI-powered e-commerce platform. The project was completed ahead of schedule and exceeded all expectations.",
    avatar: "SC",
  },
  {
    name: "Marcus Rivera",
    company: "DataFlow Analytics",
    feedback: "Working with Asif was a game-changer. His smart analytics dashboard transformed how we make data-driven decisions.",
    avatar: "MR",
  },
  {
    name: "Aisha Khan",
    company: "HealthCare Plus",
    feedback: "The patient portal Asif built is secure, user-friendly, and perfectly tailored to our needs. Highly recommended!",
    avatar: "AK",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Client Feedback</h1>
          <p className="text-gray-600 mt-2">What clients say about working with me</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.feedback}"</p>
            </div>
          ))}
        </main>
      </article>
    </div>
  );
}