// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';

// import Solutions from './pages/Solutions';
// import Channels from './pages/Channels';
// import Resources from './pages/Resources';
// import Contact from './pages/Contact';
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import AboutUs from './pages/AboutUs';

// // Scroll to top on route change
// function ScrollToTop() {
//   const { pathname, hash } = useLocation();

//   useEffect(() => {
//     if (hash) {
//       // If there's a hash, scroll to that element
//       setTimeout(() => {
//         const element = document.getElementById(hash.substring(1));
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 100);
//     } else {
//       // Otherwise scroll to top
//       window.scrollTo(0, 0);
//     }
//   }, [pathname, hash]);

//   return null;
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow pt-16">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             <Route path="/solutions" element={<Solutions />} />
//             <Route path="/channels" element={<Channels />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Channels = lazy(() => import('./pages/Channels'));
const Technology = lazy(() => import('./pages/Technology'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



