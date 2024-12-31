import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./auth/LoginButton";
import { useAuth } from "../hooks/useAuth";
import { UpgradeButton } from "./subscription/UpgradeButton";
import pytaiaLogo from "../assets/logos/pytaia-logo.svg";

export function Header() {
   const { isAuthenticated, hasPlus, user } = useAuth();
   const [isProfileOpen, setIsProfileOpen] = useState(false);

   return (
      <header className="bg-white shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <div className="flex items-center flex-1">
                  <Link to="/" className="flex items-center">
                     <img
                        src={pytaiaLogo}
                        alt="Pytaia Logo"
                        className="h-8 w-auto mr-2"
                     />
                     <span className="text-2xl font-bold text-green-600">
                        Pytaia
                     </span>
                  </Link>

                  <nav className="flex-1 flex justify-center space-x-12">
                     <Link
                        to="/"
                        className="text-gray-700 hover:text-pink-600 text-lg"
                     >
                        Home
                     </Link>
                     <Link
                        to="/subjects"
                        className="text-gray-700 hover:text-pink-600 text-lg"
                     >
                        Subjects
                     </Link>
                     <Link
                        to="/about"
                        className="text-gray-700 hover:text-pink-600 text-lg"
                     >
                        About
                     </Link>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  {isAuthenticated ? (
                     <>
                        {!hasPlus && <UpgradeButton />}
                        <div className="flex items-center gap-2">
                           {user?.photoURL ? (
                              <img
                                 src={user.photoURL}
                                 alt="Profile"
                                 className="w-8 h-8 rounded-full"
                              />
                           ) : (
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                 <span className="text-green-800 font-medium">
                                    {user?.email?.[0].toUpperCase()}
                                 </span>
                              </div>
                           )}
                           <span className="text-gray-700">{user?.email}</span>
                        </div>
                     </>
                  ) : (
                     <LoginButton />
                  )}
               </div>
            </div>
         </div>
      </header>
   );
}
