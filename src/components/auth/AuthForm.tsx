import React, { useState } from 'react';
import { Mail, Lock, Chrome } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Input } from './Input';

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          icon={<Mail className="w-5 h-5 text-green-600" />}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          icon={<Lock className="w-5 h-5 text-green-600" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-green-500 to-pink-500 text-white rounded-lg font-semibold hover:from-pink-500 hover:to-green-500 transition-all shadow-md"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
        >
          <Chrome className="w-5 h-5 text-blue-500" />
          <span>Google</span>
        </button>

        <p className="text-center text-gray-600 mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-600 hover:text-pink-700 font-semibold"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </form>
    </div>
  );
}