import React from 'react';
import { DeviceContext, DeviceProvider } from 'components/Providers/DeviceProvider';
import { GeoLocationProvider } from 'components/Providers/GeoLocationProvider';
import { I18nProvider, SupportedLocales } from 'components/Providers/I18nProvider';
import { useRouter } from 'next/router';

const BaseLayoutComponent: React.FC = ({ children }) => {
  const { safeArea } = React.useContext(DeviceContext);

  // Just doing it like this for now...
  const styles = {
    maxWidth: '95vw',
    margin: 'auto',
    paddingTop: safeArea?.top || 10,
    paddingBottom: safeArea?.bottom || 10,
    paddingLeft: safeArea?.left,
    paddingRight: safeArea?.right,
  };

  return <div style={styles}>{children}</div>;
};

export const BaseLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const locale = router.locale as SupportedLocales;

  return (
    <I18nProvider locale={locale}>
      <DeviceProvider>
        <GeoLocationProvider>
          <BaseLayoutComponent>{children}</BaseLayoutComponent>
        </GeoLocationProvider>
      </DeviceProvider>
    </I18nProvider>
  );
};
