import Link from "next/link";

const CONTACT_INFO = {
  email: "ch.masifmajeed@gmail.com",
  phone: "+92 3251561050",
  whatsapp: "+92 3251561050",
  office: "Pakistan, Punjab, Vehari, Postal Code: 61100",
  latitude: 30.086304,
  longitude: 72.33606,
  googleCalendar: "https://calendar.google.com/calendar/u/0/r/week/2024/10",
  availability: "Mon - Sun: 9am - 10pm",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-gray-100 mt-2">Ready to discuss your project?</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
                  <input type="email" placeholder="Email Address" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
                </div>
                <input type="text" placeholder="Company/Organization" className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                <textarea placeholder="Project Details" rows={4} className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full" required />
                <div className="flex gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600" required />
                    <span className="text-sm text-gray-600">I agree to the terms</span>
                  </label>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  💬 You can also chat with my AI assistant using the floating button below!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="font-bold text-gray-800">Email</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline text-sm">{CONTACT_INFO.email}</a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 011 1.006l1.5 2A2 2 0 019.38 7h1.62a2 2 0 012 2v3.75a2 2 0 01-.68 1.41l-2.47 1.24A1 1 0 0010.5 13h-2a1 1 0 00-1.09-.36L3.73 9.41A2 2 0 013.05 7V5a2 2 0 012-2zM13 19l-3-2.72c-.48-.43-.92-1.05-1.26-1.76a2 2 0 01-.05-1.14l2-4c.48-.95 1.6-1.05 2.09-.5l1.91.954c.23.115.35.316.35.546V17a2 2 0 01-2 2z" /></svg>
                </div>
                <h4 className="font-bold text-gray-800">Phone / WhatsApp</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-600 hover:underline text-sm">{CONTACT_INFO.phone}</a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="font-bold text-gray-800">Office Address</h4>
                <p className="text-blue-600 hover:underline text-sm">{CONTACT_INFO.office}</p>
                <p className="text-gray-500 text-xs mt-2">
                  📍 {CONTACT_INFO.latitude}°, {CONTACT_INFO.longitude}°
                </p>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-gray-800">Availability</h4>
                <p className="text-blue-600 text-sm font-medium">{CONTACT_INFO.availability}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <section className="mt-16 py-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
          <p className="text-blue-100 mb-8">Choose your preferred time - I'm available 7 days a week, 9am to 10pm</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href={CONTACT_INFO.googleCalendar} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Google Calendar →
            </a>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Video Call
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Phone Call
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              In-Person
            </button>
          </div>
          <p className="mt-4 text-blue-100/80 text-sm">Meeting options: Video Call • Phone Call • In-Person</p>
        </section>
      </div>
    </div>
  );
}
