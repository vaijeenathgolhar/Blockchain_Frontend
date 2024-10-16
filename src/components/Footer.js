import React from 'react';
import './Footer.css'; // Custom CSS for neumorphism and 3D effects

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-3xl shadow-neumorphic-sm py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Contact Info */}
          <div className="footer-section p-6 rounded-xl neumorphic-sm transition-transform duration-300 hover:scale-102">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">1234 Acme St, Suite 100</p>
            <p className="text-gray-400 mb-2">Anytown, State 12345</p>
            <p className="text-gray-400">
              Email: <a href="mailto:info@acme.com" className="text-orange-500 hover:text-orange-400">info@acme.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+441234567890" className="text-orange-500 hover:text-orange-400">+44 1234567890</a>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-section p-6 rounded-xl neumorphic-sm transition-transform duration-300 hover:scale-102">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/verify" className="hover:text-orange-400">Verify</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="footer-section p-6 rounded-xl neumorphic-sm transition-transform duration-300 hover:scale-102">
            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.5c-.88.38-1.82.63-2.81.75 1.01-.61 1.79-1.58 2.16-2.72-.95.56-2 .96-3.12 1.17C19.24 2.97 17.9 2.5 16.5 2.5c-3.31 0-5.94 2.68-5.94 5.97 0 .47.05.92.15 1.35-4.95-.25-9.33-2.63-12.27-6.25-.51.87-.81 1.88-.81 2.97 0 2.05 1.03 3.85 2.61 4.91-.96-.03-1.86-.29-2.64-.73v.07c0 2.86 2.01 5.25 4.68 5.79-.49.14-1 .2-1.53.2-.38 0-.74-.04-1.1-.1.75 2.34 2.92 4.04 5.49 4.09-2.01 1.58-4.55 2.53-7.31 2.53-.47 0-.93-.03-1.39-.08 2.6 1.68 5.68 2.65 8.98 2.65 10.77 0 16.66-8.97 16.66-16.74 0-.26 0-.52-.02-.78.99-.72 1.86-1.6 2.55-2.61z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.34-1.59.57-2.45.67a4.33 4.33 0 001.91-2.39c-.85.51-1.8.87-2.81 1.07A4.28 4.28 0 0015.45 4c-2.38 0-4.31 1.96-4.31 4.37 0 .34.04.68.11 1C7.69 9.3 4.07 7.41 1.64 4.5c-.36.61-.57 1.32-.57 2.08 0 1.43.72 2.7 1.8 3.45a4.3 4.3 0 01-1.95-.55v.05c0 2 1.42 3.67 3.3 4.04a4.36 4.36 0 01-1.94.07c.54 1.69 2.1 2.92 3.95 2.95a8.64 8.64 0 01-5.34 1.87c-.35 0-.7-.02-1.04-.06A12.23 12.23 0 008 21c8.12 0 12.56-6.82 12.56-12.72 0-.2 0-.4-.01-.6A8.98 8.98 0 0024 5.37c-.88.4-1.83.67-2.82.78z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.75 3C5.24 3 1.75 6.49 1.75 11c0 3.47 2.47 6.47 5.78 7.28v-5.15H5.68v-2.13h1.85V9.76c0-1.86 1.11-2.88 2.8-2.88.82 0 1.68.15 1.68.15v1.86h-.95c-.94 0-1.23.58-1.23 1.18v1.42h2.1l-.33 2.13h-1.77V18.3c3.31-.8 5.78-3.8 5.78-7.28 0-4.51-3.49-8-7.75-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
