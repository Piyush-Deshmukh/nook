import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-2 justify-center items-center">
      <p>this page doesn’t exist. maybe it never did.</p>
      <Link href="/" className="underline">
        ← back to home
      </Link>
    </div>
  );
}
