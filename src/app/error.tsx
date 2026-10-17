"use client";

import { useEffect } from "react";
import { SITE } from "@/data/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="text-[11px] font-medium uppercase tracking-mega text-gold">
        {SITE.name}
      </p>
      <h1 className="mt-6 font-serif text-5xl font-light text-ivory sm:text-6xl">
        Something did not develop
      </h1>
      <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-stone">
        An unexpected error occurred. Please try again, or reach the studio
        directly at {SITE.phoneDisplay}.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="bg-ivory px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ink transition-colors hover:bg-gold"
        >
          Try again
        </button>
        <a
          href={SITE.phoneHref}
          className="border border-ivory/30 px-8 py-4 text-[11px] font-semibold uppercase tracking-wide-xl text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          Call the studio
        </a>
      </div>
    </main>
  );
}
