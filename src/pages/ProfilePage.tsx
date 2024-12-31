import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { updateUserProfile } from "../lib/firebase/users";

export function ProfilePage() {
   const { user } = useAuth();
   const [displayName, setDisplayName] = useState("");
   const [isSaving, setIsSaving] = useState(false);
   const [message, setMessage] = useState<{
      type: "success" | "error";
      text: string;
   } | null>(null);

   useEffect(() => {
      if (user?.displayName) {
         setDisplayName(user.displayName);
      }
   }, [user]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!user) return;

      setIsSaving(true);
      setMessage(null);

      try {
         await updateUserProfile(user.uid, { displayName });
         setMessage({ type: "success", text: "Profile updated successfully!" });
      } catch (error) {
         setMessage({ type: "error", text: "Failed to update profile" });
      } finally {
         setIsSaving(false);
      }
   };

   return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
         <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h1>

         {message && (
            <div
               className={`p-4 rounded mb-4 ${
                  message.type === "success"
                     ? "bg-green-100 text-green-700"
                     : "bg-red-100 text-red-700"
               }`}
            >
               {message.text}
            </div>
         )}

         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <label
                  htmlFor="displayName"
                  className="block text-sm font-medium text-gray-700"
               >
                  Display Name
               </label>
               <input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your display name"
               />
            </div>

            <button
               type="submit"
               disabled={isSaving}
               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
               {isSaving ? "Saving..." : "Save Changes"}
            </button>
         </form>
      </div>
   );
}
