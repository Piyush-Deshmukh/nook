import Link from "next/link";
import PastSection from "@/components/past-section";
import PolaroidStack from "@/components/polaroid-stack";
import SITE from "@/config/site";
import Signature from "@/components/signature";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 max-w-[600px] p-5 pt-7 lg:p-10 leading-relaxed text-base">
      <h1 className="text-lg font-semibold">{SITE.name}</h1>

      <p>
        I build software with an emphasis on backend and full-stack systems —
        thoughtful, reliable, and focused on shipping useful tools.
      </p>

      <p>
        I enjoy building projects, learning through writing, and improving how
        systems work at scale. I care about clarity and speed in developer
        workflows.
      </p>

      <p>
        Past projects and experiments are available in the repos linked below; I
        keep the writing section for essays and notes about what I’m learning.
      </p>

      <PastSection />

      <p>
        connect with me on{" "}
        <a
          href={SITE.social.twitter}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          X (twitter)
        </a>
        ,{" "}
        <a
          href={SITE.social.github}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          github
        </a>
        ,{" "}
        <a
          href={SITE.social.linkedin}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          linkedin
        </a>
        , or at{" "}
        <a
          href="mailto:piyushdeshmukh043@gmail.com"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          piyushdeshmukh043@gmail.com
        </a>
        !
      </p>

      <p>
        <Link
          href="/blog"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          writing →
        </Link>
      </p>

      <Signature />
      <PolaroidStack />
    </main>
  );
}
