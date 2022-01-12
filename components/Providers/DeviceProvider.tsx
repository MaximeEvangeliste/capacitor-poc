import React from 'react';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { Device, DeviceInfo, GetLanguageCodeResult } from '@capacitor/device';

type DeviceContext = {
  safeArea?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  type?: string;
  info?: DeviceInfo;
  language?: GetLanguageCodeResult['value'];
};

export const DeviceContext = React.createContext<DeviceContext>({});

export const DeviceProvider: React.FC = ({ children }) => {
  const [safeArea, setSafeArea] = React.useState<DeviceContext['safeArea']>({} as DeviceContext['safeArea']);
  const [info, setInfo] = React.useState<DeviceContext['info']>({} as DeviceContext['info']);
  const [language, setLanguage] = React.useState<DeviceContext['language']>({} as DeviceContext['language']);

  const getSafeArea = async () => {
    const { insets } = await SafeArea.getSafeAreaInsets();
    setSafeArea(insets);
  };

  const getLanguageCode = async () => {
    const lang = await Device.getLanguageCode();
    setLanguage(lang.value);
  };

  const getInfo = async () => {
    const info = await Device.getInfo();
    setInfo(info);
  };

  React.useEffect(() => {
    getLanguageCode();
    getInfo();
    getSafeArea();
  }, []);

  const value = {
    safeArea,
    language,
    info,
  };

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};
