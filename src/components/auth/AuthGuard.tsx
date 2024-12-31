import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PricingCard } from '../subscription/PricingCard';

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, hasPlus } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Login Required</h2>
          <p className="text-green-600">Please login to access this content</p>
        </div>
      </div>
    );
  }

  if (!hasPlus) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Plus Plan Required</h2>
          <p className="text-green-600 mb-8">Upgrade to access all content</p>
        </div>
        <PricingCard />
      </div>
    );
  }

  return <>{children}</>;
}