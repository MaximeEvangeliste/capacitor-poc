import { Navigation } from 'components/Navigation';
import { DeviceContext, DeviceProvider } from 'components/Providers/DeviceProvider';
import { GeoLocationProvider } from 'components/Providers/GeoLocationProvider';
import { I18nProvider, SupportedLocales } from 'components/Providers/I18nProvider';
import { useRouter } from 'next/router';
import React from 'react';
import { FCProps } from 'types';

function AppWrapper(props: FCProps) {
  const { safeArea } = React.useContext(DeviceContext);

  const styles = {
    gridTemplate: `
    "a" 70px
    "b" auto`,
    paddingTop: safeArea?.top || 0,
    paddingBottom: safeArea?.bottom || 0,
    paddingLeft: safeArea?.left || 0,
    paddingRight: safeArea?.right || 0,
  };

  return <div className="grid grid-rows-2 h-full" style={styles} {...props} />;
}

function BaseLayoutComponent({ children }: FCProps) {
  return <div className="w-full h-full max-w-95 mx-auto ">{children}</div>;
}

export const BaseLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const locale = router.locale as SupportedLocales;

  return (
    <I18nProvider locale={locale}>
      <DeviceProvider>
        <GeoLocationProvider>
          <AppWrapper>
            <Navigation />
            <BaseLayoutComponent>{children}</BaseLayoutComponent>
          </AppWrapper>
        </GeoLocationProvider>
      </DeviceProvider>
    </I18nProvider>
  );
};
