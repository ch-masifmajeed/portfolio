export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-lg text-gray-100 mt-2">Ready to discuss your project?</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800">Get In Touch</h3>
            <p className="text-gray-600">Ready to collaborate?</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800">AI Chatbot</h3>
            <p className="text-gray-600">Ask me anything about services, pricing, or booking</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800">Book a Consultation</h3>
            <p className="text-gray-600">Schedule a meeting</p>
          </div>
        </div>
      </div>

      <div className="mt-16 py-12 bg-blue-600 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Why Choose Me?</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">AI</div>
            <span className="text-sm">Artificial Intelligence Integration</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">Web</div>
            <span className="text-sm">Web Development</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">Solutions</div>
            <span className="text-sm">Business Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
