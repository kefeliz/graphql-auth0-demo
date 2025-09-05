"use client";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/Auth0Provider";
import Image from "next/image";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <ProtectedRoute>
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 max-w-md w-full border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <Image
              src={user.picture as string}
              alt="avatar"
              width={120}
              height={120}
              priority
              className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h2 className="mt-5 text-2xl font-semibold text-gray-900 tracking-tight">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>

            <span
              className={`mt-3 inline-block px-4 py-1.5 text-sm font-medium rounded-full transition ${
                user.email_verified
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.email_verified
                ? "✅ Email verified"
                : "⚠️ Email not verified"}
            </span>
          </div>

          <div className="mt-8">
            <button
              onClick={logout}
              className="w-full py-3 rounded-xl bg-red-600 text-white font-medium shadow-md hover:bg-red-700 hover:shadow-lg active:scale-95 transition-transform"
            >
              Log out
            </button>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
