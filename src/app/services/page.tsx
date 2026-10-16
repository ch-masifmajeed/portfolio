import { Metadata } from "next";
import Link from "next/link";

const services = [
  {
    name: "Web Development",
    price: "Starting from $500",
    description: "Custom websites, landing pages, and business applications built with modern tech stacks.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Mobile-First"],
    icon: "🌐",
  },
  {
    name: "AI Integration",
    price: "Starting from $1,000",
    description: "AI-powered workflows, chatbots, automation, and machine learning solutions.",
    features: ["Custom AI Models", "Workflow Automation", "Data Analytics", "Smart Recommendations"],
    icon: "🤖",
  },
  {
    name: "SaaS Development",
    price: "Starting from $2,000",
    description: "Full-stack SaaS products with user management, billing, and real-time features.",
    features: ["User Auth", "Stripe Integration", "Real-time Updates", "Scalable Architecture"],
    icon: "📊",
  },
  {
    name: "Consultation",
    price: "Starting from $150/hour",
    description: "Expert advice on architecture, technology stack selection, and project planning.",
    features: ["Code Review", "Architecture Design", "Tech Stack Selection", "Performance Audit"],
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Services & Pricing</h1>
          <p className="text-gray-600 mt-2">Choose the service that fits your needs</p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-4 text-blue-600 font-bold text-lg">{service.price}</div>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 1m6 0R" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Get Started
                  </Link>
                </div>
          ))}
        </main>
      </article>
    </div>
  );
}