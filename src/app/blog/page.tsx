import { Metadata } from "next";
import Link from "next/link";

const blogPosts = [
  {
    title: "Building AI-Powered Web Applications: A Complete Guide",
    excerpt: "Learn how to integrate AI capabilities into your web projects using modern tools and frameworks.",
    date: "2026-09-15",
    readTime: "5 min read",
    category: "AI & Web Dev",
  },
  {
    title: "Next.js 14: What's New and Why You Should Upgrade",
    excerpt: "A deep dive into the latest Next.js features and how they can improve your development workflow.",
    date: "2026-08-22",
    readTime: "4 min read",
    category: "Next.js",
  },
  {
    title: "Scalable Architecture for SaaS Products",
    excerpt: "Best practices for building SaaS applications that can grow with your user base.",
    date: "2026-07-10",
    readTime: "6 min read",
    category: "Architecture",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Blog & Articles</h1>
          <p className="text-gray-600 mt-2">Insights on web development, AI, and technology</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">{post.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date} • {post.readTime}</span>
                  <Link href="/blog" className="text-blue-600 hover:underline">Read More →</Link>
                </div>
              </div>
            </article>
          ))}
        </main>
      </article>
    </div>
  );
}