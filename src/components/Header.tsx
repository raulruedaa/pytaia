import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginButton } from './auth/LoginButton';
import { UpgradeButton } from './subscription/UpgradeButton';
import { useAuth } from '../hooks/useAuth';

export function Header() {
  const location = useLocation();
  const { isAuthenticated, hasPlus } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-pink-600 font-semibold' : 'text-green-700 hover:text-pink-500';
  };

  return (
    <header className="bg-gradient-to-r from-green-100 to-pink-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logos/pytaia-logo.png" 
              alt="Pyta.ia Logo" 
              className="w-10 h-10 rounded-full border-2 border-pink-600"
            />
            <h1 className="text-4xl font-extrabold text-black-600 tracking-wide hover:italic transition-all">
              Pytaia
            </h1>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link to="/" className={`px-4 py-2 rounded-md text-lg ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/subjects" className={`px-4 py-2 rounded-md text-lg ${isActive('/subjects')}`}>
              Matérias
            </Link>
            <Link to="/about" className={`px-4 py-2 rounded-md text-lg ${isActive('/about')}`}>
              Sobre
            </Link>
            {isAuthenticated ? (
              !hasPlus && <UpgradeButton />
            ) : (
              <LoginButton />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}