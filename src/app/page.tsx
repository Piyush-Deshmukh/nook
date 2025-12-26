import Link from "next/link";
import PastSection from "@/components/past-section";
import PolaroidStack from "@/components/polaroid-stack";
import SITE from "@/config/site";
import Signature from "@/components/signature";
import StickmanPullWord from "@/components/speed-text";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 max-w-[600px] p-5 pt-7 lg:p-10 leading-relaxed text-base">
      <h1 className="text-lg font-semibold">{SITE.name}</h1>

      <p>
        right now, i’m building backend systems and deploying production
        workloads to the cloud.
      </p>

      <p>
        i care a lot about <StickmanPullWord text="reliability" />. software
        should keep working after it ships. most of my work revolves around
        building APIs and systems that handle real users and real traffic.
      </p>

      <p>
        in the past, i've built a multi-store POS system, simplified real-time
        backend into API-driven system, and shipped projects to production on
        AWS.
      </p>

      <PastSection />

      <p>
        connect with me on{" "}
        <a
          href={SITE.social.twitter}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
          target="_blank"
        >
          X (twitter)
        </a>
        ,{" "}
        <a
          href={SITE.social.github}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
          target="_blank"
        >
          github
        </a>
        ,{" "}
        <a
          href={SITE.social.linkedin}
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
          target="_blank"
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

      <p className="flex flex-col">
        <Link
          href="/work"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          work →
        </Link>

        <Link
          href="/blog"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          writing →
        </Link>

        <Link
          href="/about"
          className="underline decoration-stone-500 underline-offset-[2.5px] hover:decoration-stone-400"
        >
          about →
        </Link>
      </p>

      <Signature />
      <PolaroidStack />
    </main>
  );
}
