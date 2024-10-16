   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import Header from './components/Header';
   import Footer from './components/Footer';
   import Home from './components/Home';
   import About from './components/About';
   import Contact from './components/Contact';
   import Verification from './components/Verification';

   function App() {
       return (
           <Router>
               <div className="min-h-screen flex flex-col">
                   <Header />
                   <main className="flex-grow">
                       <Routes>
                           <Route path="/" element={<Home />} />
                           <Route path="/about" element={<About />} />
                           <Route path="/contact" element={<Contact />} />
                           <Route path="/verify" element={<Verification />} />
                       </Routes>
                   </main>
                   <Footer />
               </div>
           </Router>
       );
   }

   export default App;