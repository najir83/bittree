"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    showNavbar && (
      <nav className=" fixed lg:text-lg justify-between items-center flex bg-white w-[80vw] top-10 right-[10vw] p-5 rounded-full">
        <div className="flex logo space-x-30 w-1/2">
          <Link href="/" className="text-2xl font-bold">
            BitTree
          </Link>

          <ul className="flex items-center space-x-20">
            <Link href="#">Product</Link>
            <Link href="#">Template</Link>
            <Link href="#">Marketplace</Link>
            <Link href="#">Learn</Link>
            <Link href="/pricing">Pricing</Link>
          </ul>
        </div>
        {/* <div className="button flex gap-4">
          <button className="bg-gray-300 font-bold cursor-pointer rounded-2xl p-3 px-7">
            Log in
          </button>
          <button className="p-3 px-10 text-white bg-black font-bold rounded-full cursor-pointer">
            Sign up free
          </button>
        </div> */}
        <svg href="/"
          height="32"
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          width="32"
          data-view-component="true"
          className="octicon octicon-mark-github v-align-middle"
        >
          <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
        </svg>
      </nav>
    )
  );
};

export default Navbar;
