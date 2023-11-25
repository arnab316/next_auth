// components/Navbar.js
"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const { user, isLoaded } = useUser();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or brand */}
        <div>
          <a href="/" className="text-white text-xl font-bold">
            {user?.fullName}
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          {isLoaded && user && (
            <li>
              <UserButton afterSignOutUrl="/" />
              <a href="">{user?.primaryEmailAddress?.emailAddress}</a>
            </li>
          )}
          <li>
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
