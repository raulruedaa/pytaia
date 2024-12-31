import React from 'react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function LoginButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/auth')}
      className="flex items-center gap-2 px-4 py-2 text-green-700 hover:text-pink-600 font-medium"
    >
      <LogIn className="w-4 h-4" />
      <span>Login</span>
    </button>
  );
}