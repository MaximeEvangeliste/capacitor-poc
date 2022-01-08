import Link from 'next/link';

export default function Home() {
  return (
    <div className="m-8">
      <Link href="/about">about page</Link>
      <h1 className="text-3xl font-bold underline ">Home Page</h1>
    </div>
  );
}
