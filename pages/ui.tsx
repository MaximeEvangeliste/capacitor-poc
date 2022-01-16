import { Trans } from '@lingui/macro';
import { Button, Chip } from 'components';
import { Field, InputText } from 'components/Form';
import { BaseLayout } from 'components/Layout/BaseLayout';
import { useState } from 'react';
import { Variant } from 'types';

export default function UiPage() {
  const [selectedChip, setSelectedChip] = useState(0);

  return (
    <BaseLayout>
      <div className="space-y-16">
        <div>
          <h1 className="mb-6 text-xl font-semibold">Buttons</h1>
          <div>
            <div className="space-x-4">
              <Button variant={Variant.primary}>Primary</Button>
              <Button variant={Variant.secondary}>Secondary</Button>
              <Button variant={Variant.tertiary}>Tertiary</Button>
              <Button variant={Variant.teal}>Teal</Button>
              <Button disabled variant={Variant.primary}>
                Primary disabled
              </Button>
              <Button disabled variant={Variant.secondary}>
                Secondary disabled
              </Button>
              <Button disabled variant={Variant.tertiary}>
                Tertiary disabled
              </Button>
              <Button disabled variant={Variant.teal}>
                Teal disabled
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-xl font-semibold">Button stack (block)</h1>
          <div className="space-y-2">
            <Button variant={Variant.primary} block>
              Primary
            </Button>
            <Button variant={Variant.secondary} block>
              Secondary
            </Button>
            <Button variant={Variant.tertiary} block>
              Tertiary
            </Button>
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-xl font-semibold">Chips</h1>
          <div className="mb-12 space-x-2 space-y-2">
            <Chip selected={true}>Tout</Chip>
            <Chip>Boire et manger</Chip>
            <Chip>Boutiques</Chip>
            <Chip>Activités sportives & de détente</Chip>
            <Chip>Terroir</Chip>
            <Chip>Culture & divertissement</Chip>
            <Chip disabled>Hébergements</Chip>
          </div>
        </div>

        <div>
          <h1 className="mb-6 text-xl font-semibold">Form</h1>

          <Field label={<Trans>First name</Trans>} helpText={<Trans>Enter your first name for testing purposes</Trans>}>
            <InputText placeholder="Type your first name..." />
          </Field>

          <Field label={<Trans>Phone number</Trans>} helpText={<Trans>Use the correct phone number format</Trans>}>
            <InputText type="tel" placeholder="Phone number here..." />
          </Field>

          <Field label={<Trans>Date</Trans>} helpText={<Trans>Use the correct date format</Trans>}>
            <InputText type="date" placeholder="Phone number here..." />
          </Field>

          <Field label={<Trans>Error field</Trans>} errorText={<Trans>Please check your input</Trans>}>
            <InputText />
          </Field>

          <Field
            label={<Trans>Error + help field</Trans>}
            helpText={<Trans>This is a help text</Trans>}
            errorText={<Trans>Please check your input</Trans>}>
            <InputText />
          </Field>

          <Field label={<Trans>Success field</Trans>} successText={<Trans>It look like it worked!</Trans>}>
            <InputText />
          </Field>

          <Field label={<Trans>Block field</Trans>}>
            <InputText block />
          </Field>
        </div>
      </div>
    </BaseLayout>
  );
}
