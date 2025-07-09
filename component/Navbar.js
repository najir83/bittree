"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate","/pricing"].includes(pathname);

  const [isMobile, setIsMobile] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    showNavbar && (
      <nav className={`shadow-lg  fixed z-20 top-10 left-5 right-5 lg:right-[10vw] bg-white p-5 rounded-full w-[90vw] lg:w-[80vw] flex justify-between items-center text-lg  `  }>
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-10 w-1/2">
          <Link href="/" className="text-2xl font-bold">
            BitTree
          </Link>

          {!isMobile && (
            <ul className="flex items-center gap-6">
              <Link href="#">Product</Link>
              <Link href="/generate">Template</Link>
              <Link href="#">Marketplace</Link>
              <Link href="#">Learn</Link>
              <Link href="/pricing">Pricing</Link>
            </ul>
          )}
        </div>

        {/* Right: GitHub + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link target="_blank" href="https://github.com/najir83/bittree">
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              className="octicon v-align-middle"
              aria-hidden="true"
            >
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z" />
            </svg>
          </Link>

          {isMobile && (
            <button onClick={() => setShowNav(!showNav)}>
              <i className={`fa-solid  fa-${showNav ? "xmark":"bars"} text-3xl`}></i>
            </button>
          )}
        </div>

        {/* Mobile Dropdown */}
        {isMobile && showNav && (
          <div className="absolute top-20 right-0 z-10 bg-white px-10 py-7 rounded-xl shadow-md">
            <ul className="flex flex-col gap-3 text-black">
              <Link href="#" className={`${pathname=="/#1" ? "bg-gray-300 ":" "} p-3 rounded-2xl`}>Product</Link>
              <Link href="/generate" className={`${pathname=="/generate" ? "bg-gray-300 ":" "} p-3 rounded-2xl`}>Template</Link>
              <Link href="#" className={`${pathname=="#2" ? "bg-gray-300 ":" "} p-3 rounded-2xl`}>Marketplace</Link>
              <Link href="#" className={`${pathname=="#3" ? "bg-gray-300 ":" "} p-3 rounded-2xl`}>Learn</Link>
              <Link href="/pricing" className={`${pathname=="/pricing" ? "bg-gray-300 ":" "} p-3 rounded-2xl`}>Pricing</Link>
            </ul>
          </div>
        )}
      </nav>
    )
  );
};

export default Navbar;
