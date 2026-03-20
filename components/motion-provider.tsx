import { createContext, useContext, useEffect, useState, useCallback } from "react";

interface MotionContextType {
  motionEnabled: boolean;
  setMotionEnabled: (enabled: boolean) => void;
}

const MotionContext = createContext<MotionContextType>({
  motionEnabled: true,
  setMotionEnabled: () => {},
});

export const useMotion = () => useContext(MotionContext);

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [motionEnabled, setMotionEnabledState] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("motion");
    if (stored !== null) {
      setMotionEnabledState(stored === "true");
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMotionEnabledState(false);
    }
  }, []);

  const setMotionEnabled = useCallback((enabled: boolean) => {
    setMotionEnabledState(enabled);
    localStorage.setItem("motion", String(enabled));
  }, []);

  return (
    <MotionContext.Provider value={{ motionEnabled, setMotionEnabled }}>
      {children}
    </MotionContext.Provider>
  );
};
