import { Link } from "react-router";
import { AudioLines, Timer, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { useDocumentTitle } from "@/hooks/use-document-title";


const features = [
  { icon: AudioLines, title: "高準確度逐字稿", en: "High-accuracy transcripts", body: "Powered by OpenAI Whisper. Supports Chinese and English." },
  { icon: Timer, title: "三分鐘交付", en: "Three-minute turnaround", body: "Processed in the background — you get an email when it's ready." },
  { icon: BadgeCheck, title: "可商用授權", en: "Commercial-use ready", body: "You own the output. Use it however you like." },
];

export function Index() {
  useDocumentTitle(
    "Video Speed Reader — 影片三分鐘轉逐字稿",
    "Upload your video, get a clean transcript in three minutes. 上傳影片，三分鐘內拿到逐字稿。",
  );
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/70 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Button asChild variant="hero" size="sm">
            <Link to="/sign-in">Sign in / 登入</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-hero-glow">
          <div className="mx-auto max-w-4xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32">
            <Reveal>
              <p className="mb-6 inline-block rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
                Video → Transcript, fast
              </p>
              <h1 className="text-gradient text-5xl font-bold tracking-tight sm:text-7xl">Video Speed Reader</h1>
              <p className="mt-6 text-xl font-medium sm:text-2xl">上傳影片，三分鐘內拿到逐字稿。</p>
              <p className="mt-3 text-muted-foreground">Upload your video, get a clean transcript in three minutes.</p>
              <div className="mt-10">
                <Button asChild variant="hero" size="lg">
                  <Link to="/sign-up">Get started</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.en} delay={i * 120}>
                <div className="h-full rounded-2xl border bg-card p-6 transition-colors hover:border-primary/50">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-glow">
                    <f.icon />
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.en}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Video Speed Reader</footer>
    </div>
  );
}
