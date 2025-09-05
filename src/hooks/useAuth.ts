import { useAuth as useAuthContext } from "@/context/Auth0Provider";

export function useAuth() {
  return useAuthContext();
}

// Re-export for convenience
export * from "@/context/Auth0Provider";
