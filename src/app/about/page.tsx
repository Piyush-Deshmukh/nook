import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-2 max-w-[600px] p-5 pt-7 lg:p-10 leading-relaxed text-base">
      <p>
        <Link
          href="/"
          className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
        >
          ← Back to home
        </Link>
      </p>

      <h1 className="text-lg font-semibold mt-4">About</h1>

      <p className="flex flex-col gap-4">
        <span>i’m piyush.</span>i didn’t plan on becoming a software engineer. i
        just liked solving problems and understanding why things worked the way
        they did.
      </p>

      <p>
        i completed by bachelor's in Artificial Intelligence and Data Science
        from Jabalpur Engineering College in 2025.
      </p>

      <p>
        college gave me the space to explore that curiosity. mostly outside the
        classroom and through things i built on my own.
      </p>

      <p>
        outside of work, i enjoy writing occasionally, reading books, building
        small tools and learning new things just because i'm curious.
      </p>

      <p>
        i also like minimal linux setups, neovim, tinkering with configs, and
        long walks.
      </p>

      <p className="mt-6 text-sm text-stone-600">
        this site is a snapshot. i’m still figuring things out.🍀
      </p>
    </main>
  );
}
