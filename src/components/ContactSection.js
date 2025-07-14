'use client';
import { Mail, Phone, MapPin, MessageSquare, AtSign, Headset } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ Add this line


export default function ContactSection() {
  return (
    <section className="w-full bg-[var(--main-bg)] py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
       <p className="text-center text-[var(--text-primary)] max-w-2xl mx-auto mb-12">
  Whether you&apos;re interested in our superfoods, wholesale partnerships, or just want to say hi — 
  we&apos;re always happy to connect!
</p>

   <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <MessageSquare size={32} className="mx-auto mb-3 text-purple-700" />
            <h4 className="text-lg font-semibold mb-1">Chat with Us</h4>
            <p className="text-sm text-gray-600">Reach us via live chat for quick queries.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <FaWhatsapp size={32} className="mx-auto mb-3 text-green-600" />
            <h4 className="text-lg font-semibold mb-1">WhatsApp</h4>
            <p className="text-sm text-gray-600">Send us a message on WhatsApp anytime.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <AtSign size={32} className="mx-auto mb-3 text-blue-600" />
            <h4 className="text-lg font-semibold mb-1">Email</h4>
            <p className="text-sm text-gray-600">Email us your inquiries or partnership ideas.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl text-center">
            <Headset size={32} className="mx-auto mb-3 text-red-600" />
            <h4 className="text-lg font-semibold mb-1">Call Us</h4>
            <p className="text-sm text-gray-600">Talk to our team for detailed support.</p>
          </div>
        </div>
        <div className="bg-white mt-10 shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          {/* Left Contact Info */}
          <div className="bg-[var(--card-bg)] text-[var(--text-primary)] p-8 flex flex-col gap-6 justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
              <p className="text-sm opacity-90">
                Reach out to us for product questions, collaborations or distribution opportunities.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} /> <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} /> <span>support@farmik.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} /> <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-2 p-8 bg-white">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-[var(--text-primary)]">Your Name</label>
                <input
                  type="text"
                  placeholder="John Trengly"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-[var(--main-bg)] text-[var(--text-primary)]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-[var(--text-primary)]">Your Email</label>
                <input
                  type="email"
                  placeholder="hello@farmik.com"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-[var(--main-bg)] text-[var(--text-primary)]"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-sm mb-1 text-[var(--text-primary)]">Subject</label>
                <input
                  type="text"
                  placeholder="I want to know more about your products"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-[var(--main-bg)] text-[var(--text-primary)]"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-sm mb-1 text-[var(--text-primary)]">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-[var(--main-bg)] text-[var(--text-primary)]"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-[var(--button-primary)] hover:bg-[var(--button-hover)] text-[var(--button-text)] px-6 py-3 rounded-lg transition w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Method Cards */}
     
      </div>
    </section>
  );
}