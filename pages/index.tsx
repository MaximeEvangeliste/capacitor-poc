import { Select } from 'components/Select';
import { BaseLayout } from 'components/Layout/Base';
import Link from 'next/link';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <Link href="/about">about page</Link>
        <h1 className="text-3xl font-bold underline ">sup</h1>
      </div>
      <Select />
    </BaseLayout>
  );
}
