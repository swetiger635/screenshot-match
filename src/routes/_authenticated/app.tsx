import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { queryClient } from "../__root";
import { useAuthenticatedUser } from "./route";

export function AppPage() {
  useDocumentTitle("Dashboard — Video Speed Reader", "Your Video Speed Reader dashboard.");
  const user = useAuthenticatedUser();
  const navigate = useNavigate();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate("/sign-in", { replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut /> Sign out
          </Button>
        </div>
      </header>
      <main className="bg-hero-glow flex-1">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h1 className="text-3xl font-bold sm:text-4xl">Hi {user.email}</h1>
          <p className="mx-auto mt-6 max-w-xl rounded-2xl border bg-card p-6 text-muted-foreground">
            Your dashboard is coming soon. Upload functionality will be added in the next milestone.
          </p>
        </div>
      </main>
    </div>
  );
}
