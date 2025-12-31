// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const solutions = [
//     { name: 'User Acquisition', href: '/solutions#user-acquisition', desc: 'Scale high-intent leads' },
//     { name: 'Retargeting & Conversion', href: '/solutions#retargeting', desc: 'Re-engage and convert' },
//     { name: 'Brand Safety & Anti-Fraud', href: '/solutions#brand-safety', desc: 'Protect your budget' }
//   ];

//   const channels = [
//     { name: 'Mobile & In-App', href: '/channels#mobile', desc: 'Reach mobile users' },
//     { name: 'Video & CTV', href: '/channels#video', desc: 'Engage with video' },
//     { name: 'Native & Display', href: '/channels#native', desc: 'Seamless ad integration' }
//   ];

//   const handleDropdownClick = (item) => {
//     navigate(item.href);
//     setActiveDropdown(null);
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
//     }`}>
//       <div className="container-custom">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300"></div>
//             <span className="text-xl font-bold text-gray-900">BidMetrix.ai</span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-1">
//             <Link 
//               to="/" 
//               className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
//             >
//               Home
//             </Link>
            
//             <Link 
//               to="/about" 
//               className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
//             >
//               About
//             </Link>
            
//             {/* Solutions Dropdown */}
//             <div 
//               className="relative" 
//               onMouseEnter={() => setActiveDropdown('solutions')} 
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50">
//                 Solutions 
//                 <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
//                   activeDropdown === 'solutions' ? 'rotate-180' : ''
//                 }`} />
//               </button>
              
//               {activeDropdown === 'solutions' && (
//                 <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in">
//                   {solutions.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleDropdownClick(item)}
//                       className="block w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors group"
//                     >
//                       <div className="font-medium text-gray-900 group-hover:text-indigo-600">
//                         {item.name}
//                       </div>
//                       <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Channels Dropdown */}
//             <div 
//               className="relative" 
//               onMouseEnter={() => setActiveDropdown('channels')} 
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <button className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50">
//                 Channels 
//                 <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${
//                   activeDropdown === 'channels' ? 'rotate-180' : ''
//                 }`} />
//               </button>
              
//               {activeDropdown === 'channels' && (
//                 <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-2 border border-gray-100 animate-fade-in">
//                   {channels.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleDropdownClick(item)}
//                       className="block w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors group"
//                     >
//                       <div className="font-medium text-gray-900 group-hover:text-indigo-600">
//                         {item.name}
//                       </div>
//                       <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link 
//               to="/resources" 
//               className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
//             >
//               Resources
//             </Link>
            
//             <Link 
//               to="/contact" 
//               className="ml-4 bg-indigo-600 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
//             >
//               Request Demo
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" 
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
//             <div className="flex flex-col space-y-2">
//               <Link 
//                 to="/" 
//                 className="px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Home
//               </Link>
              
//               <Link 
//                 to="/about" 
//                 className="px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 About
//               </Link>

//               {/* Mobile Solutions */}
//               <div>
//                 <button 
//                   className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
//                   onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
//                 >
//                   Solutions
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     activeDropdown === 'solutions' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {activeDropdown === 'solutions' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {solutions.map((item) => (
//                       <button
//                         key={item.name}
//                         onClick={() => handleDropdownClick(item)}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
//                       >
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Channels */}
//               <div>
//                 <button 
//                   className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors"
//                   onClick={() => setActiveDropdown(activeDropdown === 'channels' ? null : 'channels')}
//                 >
//                   Channels
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     activeDropdown === 'channels' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {activeDropdown === 'channels' && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {channels.map((item) => (
//                       <button
//                         key={item.name}
//                         onClick={() => handleDropdownClick(item)}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
//                       >
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link 
//                 to="/resources" 
//                 className="px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Resources
//               </Link>
              
//               <Link 
//                 to="/contact" 
//                 className="mx-4 mt-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Request Demo
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- Scroll Hide / Show ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false); // scroll down → hide
      } else {
        setVisible(true); // scroll up → show
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { name: "User Acquisition", href: "/solutions#user-acquisition", desc: "Scale high-intent leads" },
    { name: "Retargeting & Conversion", href: "/solutions#retargeting", desc: "Re-engage and convert" },
    { name: "Brand Safety & Anti-Fraud", href: "/solutions#brand-safety", desc: "Protect your budget" }
  ];

  const channels = [
    { name: "Mobile & In-App", href: "/channels#mobile", desc: "Reach mobile users" },
    { name: "Video & CTV", href: "/channels#video", desc: "Engage with video" },
    { name: "Native & Display", href: "/channels#native", desc: "Seamless ad integration" }
  ];

  const handleNavigate = (href) => {
    navigate(href);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${visible ? "translate-y-0" : "-translate-y-full"}
      bg-white/80 backdrop-blur-xl border-b border-gray-100`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg" />
            <span className="text-xl font-semibold tracking-tight">BidMetrix.ai</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {["/", "/about", "/resources"].map((path, i) => (
              <Link
                key={i}
                to={path}
                className="relative text-gray-700 font-medium group"
              >
                {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left
                  ${isActive(path) ? "scale-x-100" : ""}`}
                />
              </Link>
            ))}

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-700 group">
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-4 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2">
                  {solutions.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition"
                    >
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Channels */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("channels")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-gray-700 group">
                Channels
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              {activeDropdown === "channels" && (
                <div className="absolute top-full left-0 mt-4 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2">
                  {channels.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition"
                    >
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-md"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {["/", "/about", "/resources", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg hover:bg-indigo-50"
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
