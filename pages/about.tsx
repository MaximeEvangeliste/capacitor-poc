import { BaseLayout } from 'components/Layout/Base';
import { Navigation } from 'components/Navigation';
import { Text } from 'components/Text';

export default function About() {
  return (
    <BaseLayout>
      <Navigation />
      <Text>About Page</Text>
    </BaseLayout>
  );
}
