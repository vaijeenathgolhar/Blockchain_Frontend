import React, { useState } from 'react';

function Verification() {
    const [fileNames, setFileNames] = useState([]); // Store file names
    const [status, setStatus] = useState(''); // Status message after submission
    const [portfolioLink, setPortfolioLink] = useState('');
    const [projectLinks, setProjectLinks] = useState([{ link: '', platform: '' }]); // Store project links and platforms
    const [certificates, setCertificates] = useState([{ file: null, platform: '' }]); // Store certificate file and platform

    // Handle file input change
    const handleFileChange = (index, e) => {
        const file = e.target.files[0];
        const newCertificates = [...certificates];
        newCertificates[index].file = file;
        setCertificates(newCertificates);
        
        if (file) {
            const newFileNames = [...fileNames];
            newFileNames[index] = file.name;
            setFileNames(newFileNames);
        }
    };

    // Handle project link input change
    const handleProjectLinkChange = (index, value) => {
        const newLinks = [...projectLinks];
        newLinks[index].link = value;
        setProjectLinks(newLinks);
    };

    // Handle platform name input change
    const handlePlatformChange = (index, value) => {
        const newLinks = [...projectLinks];
        newLinks[index].platform = value;
        setProjectLinks(newLinks);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (certificates.some(cert => cert.file)) {
            // Here you would later upload to IPFS and blockchain
            setStatus(`Successfully submitted ${fileNames.filter(Boolean).length} files!`);
        } else {
            setStatus('Please upload at least one certificate.');
        }
    };

    // Add a new project link input
    const addProjectLink = () => {
        setProjectLinks([...projectLinks, { link: '', platform: '' }]);
    };

    // Add a new certificate input
    const addCertificate = () => {
        setCertificates([...certificates, { file: null, platform: '' }]);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-neumorphism">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Skill Verification System</h1>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Submit Your Credential</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Please upload your credentials (PDF/Image) for verification.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Portfolio Link */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Link</label>
                        <input
                            type="url"
                            value={portfolioLink}
                            onChange={(e) => setPortfolioLink(e.target.value)}
                            placeholder="Enter your portfolio URL"
                            className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none shadow-neumorphism-inner"
                            required
                        />
                    </div>

                    {/* Project Links with Platforms */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Links</label>
                        {projectLinks.map((item, index) => (
                            <div key={index} className="flex mb-2">
                                <input
                                    type="url"
                                    value={item.link}
                                    onChange={(e) => handleProjectLinkChange(index, e.target.value)}
                                    placeholder={`Project Link ${index + 1}`}
                                    className="flex-grow px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none shadow-neumorphism-inner"
                                    required
                                />
                                <input
                                    type="text"
                                    value={item.platform}
                                    onChange={(e) => handlePlatformChange(index, e.target.value)}
                                    placeholder={`Platform for Project ${index + 1}`}
                                    className="flex-grow ml-2 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none shadow-neumorphism-inner"
                                    required
                                />
                                {index === projectLinks.length - 1 && (
                                    <button
                                        type="button"
                                        onClick={addProjectLink}
                                        className="ml-2 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700"
                                    >
                                        Add Another Project
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Upload Credentials with Platforms */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Credentials</label>
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex mb-2">
                                <input 
                                    type="file"
                                    onChange={(e) => handleFileChange(index, e)}
                                    className="flex-grow px-3 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-neumorphism-inner"
                                    required
                                />
                                <input
                                    type="text"
                                    value={cert.platform}
                                    onChange={(e) => {
                                        const newCertificates = [...certificates];
                                        newCertificates[index].platform = e.target.value;
                                        setCertificates(newCertificates);
                                    }}
                                    placeholder={`Platform for Certificate ${index + 1}`}
                                    className="ml-2 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-neumorphism-inner"
                                    required
                                />
                                {index === certificates.length - 1 && (
                                    <button
                                        type="button"
                                        onClick={addCertificate}
                                        className="ml-2 py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700"
                                    >
                                        Add Another Certificate
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit Credential
                    </button>
                </form>

                {status && (
                    <p className={`mt-4 text-center ${status.includes("successfully") ? 'text-green-500' : 'text-red-500'}`}>
                        {status}
                    </p>
                )}

                {fileNames.length > 0 && (
                    <p className="mt-2 text-sm text-gray-500 text-center">Uploaded files: {fileNames.filter(Boolean).join(', ')}</p>
                )}
            </div>
        </div>
    );
}

export default Verification;
