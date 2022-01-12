import { Trans } from '@lingui/macro';
import { BaseLayout } from 'components/Layout/Base';
import { Navigation } from 'components/Navigation';
import { Text } from 'components/Text';

export default function About() {
  const name = 'Maxime';

  return (
    <BaseLayout>
      <Navigation />
      <Text>About Page</Text>
      <Trans>Bonjour {name}, de quoi avez-vous envie aujourd'hui?</Trans>
    </BaseLayout>
  );
}
