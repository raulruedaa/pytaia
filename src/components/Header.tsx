import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./auth/LoginButton";
import { useAuth } from "../hooks/useAuth";
import { UpgradeButton } from "./subscription/UpgradeButton";

export function Header() {
   const { isAuthenticated, hasPlus, user } = useAuth();
   const [isProfileOpen, setIsProfileOpen] = useState(false);

   return (
      <header className="bg-white shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               <div className="flex items-center">
                  <Link to="/" className="text-2xl font-bold text-green-600">
                     Pytaia
                  </Link>
                  <nav className="ml-8 space-x-4">
                     <Link
                        to="/subjects"
                        className="text-gray-700 hover:text-pink-600"
                     >
                        Subjects
                     </Link>
                     <Link
                        to="/about"
                        className="text-gray-700 hover:text-pink-600"
                     >
                        About
                     </Link>
                  </nav>
               </div>

               <div className="flex items-center gap-4">
                  {isAuthenticated ? (
                     <>
                        {!hasPlus && <UpgradeButton />}
                        <div className="relative">
                           <button
                              onClick={() => setIsProfileOpen(!isProfileOpen)}
                              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                           >
                              {user?.photoURL ? (
                                 <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                 />
                              ) : (
                                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <span className="text-green-800 font-medium">
                                       {user?.displayName?.[0].toUpperCase() ||
                                          user?.email?.[0].toUpperCase()}
                                    </span>
                                 </div>
                              )}
                              <span className="text-gray-700">
                                 {user?.displayName || user?.email}
                              </span>
                           </button>

                           {isProfileOpen && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                 <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    Edit Profile
                                 </Link>
                                 <button
                                    onClick={() => {
                                       /* implementar logout */
                                    }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                 >
                                    Logout
                                 </button>
                              </div>
                           )}
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
