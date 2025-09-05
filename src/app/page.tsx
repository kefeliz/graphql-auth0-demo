"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/Auth0Provider";
import { LoadingSpinner } from "@/components/ui/LoadingSpiner";

export default function Home() {
  const { authenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (authenticated) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }
  }, [authenticated, loading, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <LoadingSpinner message="Loading..." />
    </div>
  );
}
