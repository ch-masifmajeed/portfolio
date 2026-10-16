import { Metadata } from "next";
import Link from "next/link";

// Project cards for the portfolio
const projects = [
  {
    id: "1",
    title: "AI-Powered E-Commerce Platform",
    description: "A full-stack e-commerce solution with AI-driven product recommendations, dynamic pricing, and real-time inventory management.",
    techStack: "React, Next.js, Node.js, MongoDB, Stripe, TensorFlow Lite",
    image: "https://images.unsplash.com/photo-1551288049 б5f4eafb71ba?w=800",
  },
  {
    id: "2",
    title: "Smart Analytics Dashboard",
    description: "Real-time analytics dashboard for business intelligence with AI-powered insights and predictive forecasting.",
    techStack: "React, TypeScript, GraphQL, Redis, Apache Spark, D3.js",
    image: "https://images.unsplash.com/photo-1557683316-7f61d4dc0185?w=800",
  },
  {
    id: "3",
    title: "Automated Marketing Engine",
    description: "AI-driven marketing platform that automates campaign creation, optimization, and ROI analysis.",
    techStack: "Next.js, Python (Flask), AWS SageMaker, Tableau, Zapier",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: "4",
    title: "Customer Support AI Chatbot",
    description: "Conversational AI chatbot integrated with CRM systems for 24/7 customer support and ticket routing.",
    techStack: "React, Node.js, Dialogflow, PostgreSQL, Slack, Zendesk",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29327?w=800",
  },
  {
    id: "5",
    title: "Personal Finance App",
    description: "AI-powered personal finance manager with budgeting, investment tracking, and financial planning.",
    techStack: "React, Next.js, Supabase, Python (PyTorch), Chart.js",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538w23a?w=800",
  },
  {
    id: "6",
    title: "Healthcare Portal",
    description: "Secure patient portal with telemedicine integration, appointment scheduling, and medical records management.",
    techStack: "React, Next.js, Node.js, FHIR, AWS HealthLake, OAuth2",
    image: "https://images.unsplash.com/photo-1502672267468-03bc858e93d4?w=800",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Featured Projects</h1>
          <p className="text-gray-600 mt-2">Selected projects showcasing my expertise</p>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {project.techStack.split(',').map((stack, i) => `• ${stack}`).join(', ')}</span>
                    <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">View Project →</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </article>
    </div>
  );
}
