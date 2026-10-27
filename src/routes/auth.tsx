import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/Logo";

type Mode = "signin" | "signup";

export const Route = createFileRoute("/auth")({
  validateSearch: (s: Record<string, unknown>): { mode?: Mode } =>
    s["mode"] === "signup" ? { mode: "signup" } : {},
  head: () => ({
    meta: [
      { title: "Sign in — Video Speed Reader" },
      { name: "description", content: "Sign in or create your Video Speed Reader account." },
      { property: "og:title", content: "Sign in — Video Speed Reader" },
      { property: "og:description", content: "Sign in or create your Video Speed Reader account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>(search.mode ?? "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/app", replace: true });
    });
  }, [navigate]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { error } =
      mode === "signup"
        ? await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin + "/app" } })
        : await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    const { data } = await supabase.auth.getSession();
    if (data.session) navigate({ to: "/app", replace: true });
    else toast.success("Check your email to confirm your account.");
  }

  const isUp = mode === "signup";
  return (
    <div className="bg-hero-glow flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mb-8"><Logo /></div>
      <div className="w-full max-w-sm rounded-2xl border bg-card p-8 shadow-glow">
        <h1 className="text-2xl font-semibold">{isUp ? "Create account / 註冊" : "Sign in / 登入"}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {isUp ? "Start turning videos into transcripts." : "Welcome back."}
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required minLength={6} autoComplete={isUp ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={loading}>
            {loading ? "Please wait…" : isUp ? "Sign up" : "Sign in"}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isUp ? "Already have an account? " : "No account yet? "}
          <button type="button" className="text-primary-glow hover:underline" onClick={() => setMode(isUp ? "signin" : "signup")}>
            {isUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
      <Link to="/" className="mt-6 text-sm text-muted-foreground hover:text-foreground">← Back home</Link>
    </div>
  );
}
