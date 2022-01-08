import { Button } from 'components/Button';
import { BaseLayout } from 'components/Layout/Base';
import Link from 'next/link';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <Link href="/about">about page</Link>
        <h1 className="text-3xl font-bold underline ">Home Page</h1>
      </div>
      <Button
        onClick={() => {
          alert('yiz');
        }}>
        press meh
      </Button>
    </BaseLayout>
  );
}
