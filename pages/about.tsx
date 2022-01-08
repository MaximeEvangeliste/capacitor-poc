import Link from 'next/link';

export default function About() {
  return (
    <div className="m-8">
      <Link href="/">home page</Link>
      <h1 className="text-3xl font-bold underline">About Page</h1>
    </div>
  );
}
