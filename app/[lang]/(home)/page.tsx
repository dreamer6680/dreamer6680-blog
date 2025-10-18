import Link from "next/link";
import { Card } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="flex flex-row justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">欢迎来到</h1>
        <h1 className="mb-4 text-2xl font-bold text-blue-500">dreamer6680</h1>
        <h1 className="mb-4 text-2xl font-bold">的博客</h1>
      </div>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs/study-note"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <a
          className="rounded-2xl border border-transparent p-6 shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, var(--color-fd-background) 10%, var(--color-fd-accent), var(--color-fd-background) 60%),linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          href="/docs/some-thinks/blog"
        >
          <div
            className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
            style={{
              boxShadow: "inset 0px 8px 8px 0px var(--tw-shadow-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-building2 lucide-building-2 size-full"
              aria-hidden="true"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-lg font-semibold">笔者碎碎念</h2>
          <p className="text-sm text-fd-muted-foreground">
            可以点击这里查看笔者的碎碎念
          </p>
        </a>
        <a
          className="rounded-2xl border border-transparent p-6 shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, var(--color-fd-background) 10%, var(--color-fd-accent), var(--color-fd-background) 60%),linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
          href="/docs/some-thinks/travel"
        >
          <div
            className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
            style={{
              boxShadow: "inset 0px 8px 8px 0px var(--tw-shadow-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-library size-full"
              aria-hidden="true"
            >
              <path d="m16 6 4 14"></path>
              <path d="M12 6v14"></path>
              <path d="M8 8v12"></path>
              <path d="M4 4v16"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-lg font-semibold">旅行规划</h2>
          <p className="text-sm text-fd-muted-foreground">
            点击这里查看旅行规划项目展示。
          </p>
        </a>
      </div>
    </main>
  );
}
