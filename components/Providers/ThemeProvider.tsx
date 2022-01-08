import React from 'react';
import { SafeArea } from 'capacitor-plugin-safe-area';

type ThemeContext = {
  safeArea?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};
export const ThemeContext = React.createContext<ThemeContext>({});

export const ThemeProvider: React.FC = ({ children }) => {
  const [safeArea, setSafeArea] = React.useState<ThemeContext['safeArea']>({});

  const getSafeArea = async () => {
    const { insets } = await SafeArea.getSafeAreaInsets();
    setSafeArea(insets);
  };

  React.useEffect(() => {
    getSafeArea();
  }, []);

  return <ThemeContext.Provider value={{ safeArea }}>{children}</ThemeContext.Provider>;
};
