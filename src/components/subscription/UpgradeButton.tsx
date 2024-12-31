import React from 'react';
import { Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function UpgradeButton() {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/pricing')}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg hover:from-yellow-500 hover:to-pink-500 transition-all shadow-md"
    >
      <Crown className="w-4 h-4" />
      <span>Upgrade to Plus</span>
    </button>
  );
}