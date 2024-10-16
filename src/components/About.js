import React from 'react';
import './About.css'; // Import custom CSS for neumorphism and 3D effects

const About = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-purple-700 text-black py-24 shadow-lg rounded-lg neumorphic">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6 tracking-wide">Revolutionizing Skill Verification with Blockchain</h1>
                    <p className="text-xl mb-10">Join us to build a more transparent and trustworthy skill verification system.</p>
                    <a href="#contact" className="inline-block bg-white text-purple-700 py-3 px-6 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">Get Started</a>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Mission Statement</h2>
                    <p className="text-lg text-gray-700">We are committed to providing a decentralized solution that ensures credentials are trustworthy and accessible to all.</p>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <h3 className="font-bold text-xl mb-3">Step 1</h3>
                            <p className="text-gray-600">Submit your credentials on the platform.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <h3 className="font-bold text-xl mb-3">Step 2</h3>
                            <p className="text-gray-600">Our decentralized blockchain network verifies them.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <h3 className="font-bold text-xl mb-3">Step 3</h3>
                            <p className="text-gray-600">Credentials are securely stored for easy access.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Blockchain? */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800">Why Blockchain?</h2>
                    <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-lg text-gray-700 space-y-4">
                        <li>Decentralized for enhanced security and trust.</li>
                        <li>Transparency that ensures authenticity.</li>
                        <li>Immutable records that prevent fraud and manipulation.</li>
                    </ul>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-700">Founded in 2024, Skill Verification Inc. was created to solve the growing problem of trust in professional credentials. We envision a future where every skill and qualification can be trusted.</p>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Key Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <h3 className="font-bold text-xl mb-3">For Job Seekers</h3>
                            <p className="text-gray-600">Easily verified credentials that help you stand out to potential employers.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <h3 className="font-bold text-xl mb-3">For Employers</h3>
                            <p className="text-gray-600">A trusted and efficient hiring process that reduces fraud and risk.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Testimonials</h2>
                    <div className="mt-8">
                        <blockquote className="italic text-gray-600">"The best credential verification platform I’ve ever used!" - User A</blockquote>
                        <blockquote className="italic text-gray-600">"Blockchain verification made the process so easy and transparent." - User B</blockquote>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                            <h3 className="font-bold">John Smith</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                            <h3 className="font-bold">Jane Doe</h3>
                            <p className="text-gray-600">CTO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg neumorphic-hover transition-transform">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full mb-4 mx-auto" />
                            <h3 className="font-bold">Alice Johnson</h3>
                            <p className="text-gray-600">COO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
                    <p className="text-lg text-gray-700">For more information, feel free to reach out at <a href="mailto:info@acme.org" className="text-blue-600 hover:underline">info@acme.org</a>.</p>
                </div>
            </section>
        </div>
    );
}

export default About;
