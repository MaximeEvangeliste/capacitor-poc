import React, { useState } from 'react';
import { Geolocation, Position } from '@capacitor/geolocation';

type GeoLocationContext = {
  position: Position;
};

export const GeoLocationContext = React.createContext<GeoLocationContext | {}>({});

export const GeoLocationProvider: React.FC = ({ children }) => {
  const [position, setPosition] = useState<Position>();

  React.useEffect(() => {
    getCurrentPosition();
  }, []);

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setPosition(coordinates);
  };

  const value = {
    position,
  };

  return <GeoLocationContext.Provider value={value}>{children}</GeoLocationContext.Provider>;
};
