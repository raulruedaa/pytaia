import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function UpgradeButton() {
   const navigate = useNavigate();

   return (
      <button
         onClick={() => navigate("/pricing")}
         className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-pink-500 text-white rounded-lg font-semibold hover:from-pink-500 hover:to-green-500 transition-all shadow-sm"
      >
         <Sparkles className="w-4 h-4" />
         <span>Upgrade to Plus</span>
      </button>
   );
}
