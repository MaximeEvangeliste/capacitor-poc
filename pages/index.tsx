import { Trans } from '@lingui/macro';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { BaseLayout } from 'components/Layout/BaseLayout';
import { showAlert, showConfirm, showPrompt } from 'components/Modal';

export default function Home() {
  return (
    <BaseLayout>
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
