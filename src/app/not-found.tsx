import Link from "next/link";
import { SITE } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-mega text-gold">
        Est. {SITE.founded}
      </p>
      <h1 className="mt-6 font-serif text-6xl font-light text-ivory sm:text-7xl">
        Lost frame
      </h1>
      <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-stone">
        This page does not exist. Let us take you back to the studio.
      </p>
      <Link
        href="/"
        className="mt-10 bg-ivory px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:bg-gold"
      >
        Back to {SITE.name}
      </Link>
    </main>
  );
}
