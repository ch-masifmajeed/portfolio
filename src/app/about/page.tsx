import { Metadata } from "next";
import Link from "next/link";

const aboutContent = `
<h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
<p className="text-gray-600 max-w-2xl">
  <p className="mb-4">
    Hello! I'm <strong>Asif Majeed</strong>, a passionate AI Web Developer and Solutions Architect. 
    I specialize in building fast, modern, and intelligent web applications that combine 
    cutting-edge AI technologies with robust engineering practices.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h2>
  <p className="text-gray-600">
    Over the years, I've worked on diverse projects ranging from e-commerce platforms 
    and SaaS products to custom AI-driven solutions. My expertise lies in 
    full-stack development, AI/ML integration, and delivering scalable web experiences.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Competencies</h2>
  <ul className="space-y-2">
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 1m6 0R" /></svg>
      Web Development (React, Next.js, Vue)
    </li>
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 1m6 0R" /></svg>
      AI & Machine Learning
    </li>
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 1m6 0R" /></svg>
      Product Management
    </li>
    <li className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 1m6 0R" /></svg>
      Customer Success
    </li>
  </ul>

  <div className="mt-12 pt-8 border-t border-gray-200">
    <Link href="/" className="text-blue-600 hover:underline">View My Work →</Link>
  </div>
`;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="text-gray-600 mt-2">AI & Web Development Expert</p>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {aboutContent}
          </div>
        </main>
      </article>
    </div>
  );
}
