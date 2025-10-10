import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="flex flex-row justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">欢迎来到</h1>
        <h1 className="mb-4 text-2xl font-bold text-blue-500">dreamer6680</h1>
        <h1 className="mb-4 text-2xl font-bold">的博客</h1>
      </div>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs/study-note"
          className="text-fd-foreground font-semibold underline"
        >
          /docs/study-note
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
