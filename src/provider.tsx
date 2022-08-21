import React, { useState, createContext, useContext } from 'react';

const overlayContext = createContext<OverlayValue>({
  addOverlay: () => {},
  removeOverlay: () => {},
  overlays: {},
});

type Props = {
  children: React.ReactNode;
};

export interface OverlayStore {
  [key: string]: OverlayCtrl;
}

export interface OverlayValue {
  addOverlay: (name: string, overlay: OverlayCtrl) => void;
  removeOverlay: (name: string) => void;
  overlays: OverlayStore;
}

export interface OverlayCtrl<OverlayInstance = any, Option = any> {
  open: (instance: OverlayInstance, option?: Option) => () => void;
  closeAll: () => void;
}

export function OverlayProvider({ children }: Props) {
  const [overlays, setOverlays] = useState<OverlayStore>({});

  const addOverlay = (name: string, overlay: OverlayCtrl) => {
    setOverlays({
      ...overlays,
      [name]: overlay,
    });
  };

  const removeOverlay = (name: string) => {
    const { [name]: removed, ...val } = overlays;
    setOverlays(val);
    return removed;
  };

  const value = {
    addOverlay,
    removeOverlay,
    overlays,
  };

  return (
    <overlayContext.Provider value={value}>{children}</overlayContext.Provider>
  );
}

export function useOverlay<OverlayInstance = any, Option = any>(
  overlayName: string
) {
  const overlays = useContext(overlayContext).overlays;
  return overlays[overlayName] as OverlayCtrl<OverlayInstance, Option>;
}

export function useOverlayStore() {
  return useContext(overlayContext);
}
