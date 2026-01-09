


// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [visible, setVisible] = useState(true);
//   const lastScrollY = useRef(0);
//   const dropdownTimer = useRef(null);

//   const location = useLocation();
//   const navigate = useNavigate();

//   /* ---------------- Scroll Hide / Show ---------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const solutions = [
//     { name: "User Acquisition", href: "/solutions#user-acquisition", desc: "Scale high-intent leads" },
//     { name: "Retargeting & Conversion", href: "/solutions#retargeting", desc: "Re-engage and convert" },
//     { name: "Brand Safety & Anti-Fraud", href: "/solutions#brand-safety", desc: "Protect your budget" }
//   ];

//   const channels = [
//     { name: "Mobile & In-App", href: "/channels#mobile", desc: "Reach mobile users" },
//     { name: "Video & CTV", href: "/channels#video", desc: "Engage with video" },
//     { name: "Native & Display", href: "/channels#native", desc: "Seamless ad integration" }
//   ];

//   const handleNavigate = (href) => {
//     navigate(href);
//     setActiveDropdown(null);
//     setIsOpen(false);
//   };

//   const handleMouseEnter = (dropdown) => {
//     if (dropdownTimer.current) {
//       clearTimeout(dropdownTimer.current);
//     }
//     setActiveDropdown(dropdown);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimer.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 300); // 300ms delay before closing
//   };

//   const cancelClose = () => {
//     if (dropdownTimer.current) {
//       clearTimeout(dropdownTimer.current);
//     }
//   };

//   const isActive = (path) => location.pathname === path;
//   const isDropdownActive = (items) => items.some(item => location.pathname + location.hash === item.href || location.pathname === item.href.split('#')[0]);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300
//       ${visible ? "translate-y-0" : "-translate-y-full"}
//       bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm`}
//     >
//       <div className="container-custom">
//         <div className="flex h-16 items-center justify-between">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
//             <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
//               BidMetrix.ai
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8">
//             <Link
//               to="/"
//               className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
//             >
//               Home
//               <span
//                 className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
//                 ${isActive("/") ? "scale-x-100" : ""}`}
//               />
//             </Link>

//             <Link
//               to="/aboutus"
//               className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
//             >
//               About Us
//               <span
//                 className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
//                 ${isActive("/about") ? "scale-x-100" : ""}`}
//               />
//             </Link>

//             {/* Solutions Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleMouseEnter("solutions")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/solutions"
//                 className="flex items-center gap-1 font-medium text-gray-700 group transition-colors hover:text-indigo-600"
//               >
//                 Solutions
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
//                 <span
//                   className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
//                   ${isDropdownActive(solutions) ? "scale-x-100" : ""}`}
//                 />
//               </Link>

//               {activeDropdown === "solutions" && (
//                 <div 
//                   className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 animate-fade-in"
//                   onMouseEnter={cancelClose}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {solutions.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleNavigate(item.href)}
//                       className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
//                     >
//                       <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
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
//               onMouseEnter={() => handleMouseEnter("channels")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/channels"
//                 className="flex items-center gap-1 font-medium text-gray-700 group transition-colors hover:text-indigo-600"
//               >
//                 Channels
//                 <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "channels" ? "rotate-180" : ""}`} />
//                 <span
//                   className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
//                   ${isDropdownActive(channels) ? "scale-x-100" : ""}`}
//                 />
//               </Link>

//               {activeDropdown === "channels" && (
//                 <div 
//                   className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 animate-fade-in"
//                   onMouseEnter={cancelClose}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   {channels.map((item) => (
//                     <button
//                       key={item.name}
//                       onClick={() => handleNavigate(item.href)}
//                       className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
//                     >
//                       <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
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
//               className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
//             >
//               Resources
//               <span
//                 className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
//                 ${isActive("/resources") ? "scale-x-100" : ""}`}
//               />
//             </Link>

//             {/* CTA */}
//             <Link
//               to="/contact"
//               className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium hover:shadow-lg transform transition-all duration-300 hover:scale-105"
//             >
//               Request Demo
//             </Link>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
//             <div className="flex flex-col gap-2">
//               <Link
//                 to="/"
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/aboutus"
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//               >
//                 About Us
//               </Link>

//               {/* Mobile Solutions */}
//               <div>
//                 <button
//                   className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
//                   onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
//                 >
//                   Solutions
//                   <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "solutions" && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {solutions.map((item) => (
//                       <button
//                         key={item.name}
//                         onClick={() => handleNavigate(item.href)}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
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
//                   className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
//                   onClick={() => setActiveDropdown(activeDropdown === "channels" ? null : "channels")}
//                 >
//                   Channels
//                   <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "channels" ? "rotate-180" : ""}`} />
//                 </button>
//                 {activeDropdown === "channels" && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {channels.map((item) => (
//                       <button
//                         key={item.name}
//                         onClick={() => handleNavigate(item.href)}
//                         className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
//                       >
//                         {item.name}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/resources"
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//               >
//                 Resources
//               </Link>
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="mx-4 mt-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all text-center"
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
import logo from "../../../public/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownTimer = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* ---------------- Scroll Hide / Show ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
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

  const technology = [
    { name: "AI Bid Engine", href: "/technology#ai-bid-engine", desc: "Intelligent bidding system" },
    { name: "Audience Data Studio", href: "/technology#audience-data-studio", desc: "Precision targeting" }
  ];

  const handleNavigate = (href) => {
    navigate(href);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const cancelClose = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
  };

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (items) => items.some(item => location.pathname + location.hash === item.href || location.pathname === item.href.split('#')[0]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${visible ? "translate-y-0" : "-translate-y-full"}
      bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group">
  {/* Logo Image */}
  <img
    src="/assets/logo.png"
    alt="logo"
    className="
      w-9 h-9
      object-contain
      rounded-lg
      transition-transform duration-300
      group-hover:scale-110
    "
  />

  {/* Brand Name */}
  <span className="
    text-xl
    font-bold
    tracking-tight
    bg-gradient-to-r from-indigo-600 to-cyan-500
    bg-clip-text
    text-transparent
  ">
    BidMetrix.ai
  </span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                ${isActive("/") ? "scale-x-100" : ""}`}
              />
            </Link>

            <Link
              to="/aboutus"
              className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
            >
              About Us
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                ${isActive("/aboutus") ? "scale-x-100" : ""}`}
              />
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/solutions"
                className="flex items-center gap-1 font-medium text-gray-700 group transition-colors hover:text-indigo-600"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                  ${isDropdownActive(solutions) ? "scale-x-100" : ""}`}
                />
              </Link>

              {activeDropdown === "solutions" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 animate-fade-in"
                  onMouseEnter={cancelClose}
                  onMouseLeave={handleMouseLeave}
                >
                  {solutions.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Channels Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("channels")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/channels"
                className="flex items-center gap-1 font-medium text-gray-700 group transition-colors hover:text-indigo-600"
              >
                Channels
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "channels" ? "rotate-180" : ""}`} />
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                  ${isDropdownActive(channels) ? "scale-x-100" : ""}`}
                />
              </Link>

              {activeDropdown === "channels" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 animate-fade-in"
                  onMouseEnter={cancelClose}
                  onMouseLeave={handleMouseLeave}
                >
                  {channels.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("technology")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/technology"
                className="flex items-center gap-1 font-medium text-gray-700 group transition-colors hover:text-indigo-600"
              >
                Technology
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "technology" ? "rotate-180" : ""}`} />
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                  ${isDropdownActive(technology) ? "scale-x-100" : ""}`}
                />
              </Link>

              {activeDropdown === "technology" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-2xl border border-gray-100 p-2 animate-fade-in"
                  onMouseEnter={cancelClose}
                  onMouseLeave={handleMouseLeave}
                >
                  {technology.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/resources"
              className="relative text-gray-700 font-medium group transition-colors hover:text-indigo-600"
            >
              Resources
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300
                ${isActive("/resources") ? "scale-x-100" : ""}`}
              />
            </Link>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-medium hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
              >
                About Us
              </Link>

              {/* Mobile Solutions */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="ml-4 mt-2 space-y-1">
                    {solutions.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Channels */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
                  onClick={() => setActiveDropdown(activeDropdown === "channels" ? null : "channels")}
                >
                  Channels
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "channels" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "channels" && (
                  <div className="ml-4 mt-2 space-y-1">
                    {channels.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Technology */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-indigo-50 transition-all"
                  onClick={() => setActiveDropdown(activeDropdown === "technology" ? null : "technology")}
                >
                  Technology
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "technology" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "technology" && (
                  <div className="ml-4 mt-2 space-y-1">
                    {technology.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/resources"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all text-center"
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

