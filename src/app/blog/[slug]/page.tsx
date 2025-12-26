import type { Metadata } from "next";
import Link from "next/link";
import SITE from "@/config/site";
import { samplePost } from "./posts/sample-post";

export type BlogPost = {
  title: string;
  date: string;
  description?: string;
  ogImage?: string;
  content: React.ReactNode;
};

const posts: Record<string, BlogPost> = {
  "sample-post": samplePost,
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug];

  if (!post) {
    return {
      title: `Post not found | ${SITE.name}`,
    };
  }

  const title = `${post.title} | ${SITE.name}`;
  const description =
    post.description || `${post.title} - A blog post by ${SITE.author}`;
  const ogImage = post.ogImage || "/brand-logo.png";

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [SITE.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: post.ogImage ? "summary_large_image" : "summary",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug];

  if (!post) {
    return (
      <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
        <h1 className="text-lg font-semibold">Post not found</h1>
        <p>
          <Link
            href="/blog"
            className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
          >
            ← Back to blog
          </Link>
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-2 max-w-[600px] px-10 py-10 leading-relaxed text-base">
      <p>
        <Link
          href="/blog"
          className="underline decoration-neutral-500 underline-offset-[2.5px] hover:decoration-neutral-400"
        >
          ← Back to blog
        </Link>
      </p>

      <h1 className="text-lg font-semibold mt-4">{post.title}</h1>
      <p className="text-sm text-neutral-600">{post.date}</p>

      <div className="flex flex-col gap-2 mt-4">{post.content}</div>
    </main>
  );
}
