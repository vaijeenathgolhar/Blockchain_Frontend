import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-200 shadow-lg rounded-lg p-4 mb-6">
            <nav className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Skill Verification Platform</h1>
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-lg shadow-md hover:shadow-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-lg shadow-md hover:shadow-lg">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-lg shadow-md hover:shadow-lg">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/verify" className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-lg shadow-md hover:shadow-lg">
                            Verify Skills
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;