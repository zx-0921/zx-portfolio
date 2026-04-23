import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
    const LinkedInIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    )

  return (
    <footer className="bg-black border-t mt-auto">
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-blue-300 transition">Home</a></li>
                <li><a href="/myprojects" className="text-gray-400 hover:text-blue-300 transition">My Projects</a></li>
                </ul>
            </div>

            {/* Social Links */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-white">Connect With Me</h3>
                <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/zhi-xian-goh-1b6a0120b/" className="text-gray-400 hover:text-blue-300 transition">
                    <LinkedInIcon />
                </a>
                <a href="mailto:z.xiangoh@gmail.com" className="text-gray-400 hover:text-blue-300 transition">
                    <Mail size={24} />
                </a>
                </div>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-lg font-bold mb-4 text-white">Contact Information</h3>
                <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                    <Mail size={18} className="text-blue-300" />
                    <a href="mailto:z.xiangoh@gmail.com" className="hover:text-blue-300 transition">
                        z.xiangoh@gmail.com
                    </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                    <Phone size={18} className="text-blue-300" />
                    <span>+60 16-448 8203</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                    <MapPin size={18} className="text-blue-300" />
                    <span>Penang, Malaysia</span>
                </li>
                </ul>
            </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-500 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Flutter Developer Portfolio. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ by Zhi Xian</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer