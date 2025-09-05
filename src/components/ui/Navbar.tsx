"use client";
import { useAuth } from "@/context/Auth0Provider";
import Link from "next/link";
import { IconUser, IconLogout } from "@tabler/icons-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  console.log("User in Navbar:", user);
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        GraphQL Demo - Next.js
      </Link>
      {user && (
        <div className="flex items-center gap-3 border-l border-gray-200 pl-4">
          <div className="flex items-center gap-2 text-gray-700">
            <IconUser className="h-5 w-5 text-white" />
            <span className="text-sm font-medium text-white">
              {user.name || user.email}
            </span>
          </div>
          <button
            onClick={logout}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            title="Sign out"
          >
            <IconLogout className="h-4 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
