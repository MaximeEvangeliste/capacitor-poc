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
      <Text>Select</Text>
      <Select />
      <Text>Modals</Text>
      <Button onClick={showAlert}>Alert</Button>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showPrompt}>Prompt</Button>
    </BaseLayout>
  );
}
