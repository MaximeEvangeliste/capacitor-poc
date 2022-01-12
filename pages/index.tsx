import { Trans } from '@lingui/macro';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { BaseLayout } from 'components/Layout/Base';
import { showAlert, showConfirm, showPrompt } from 'components/Modal';
import { Navigation } from 'components/Navigation';

export default function Home() {
  return (
    <BaseLayout>
      <Navigation></Navigation>
      <Text>test</Text>
      <Select />
      <Text>Modals</Text>
      <Button onClick={showAlert}>Alert</Button>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showPrompt}>Prompt</Button>
      <p>
        <Trans>Test de lingui dans pages/</Trans>
      </p>
    </BaseLayout>
  );
}
