import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMotion } from "./motion-provider";

export const MotionToggle: React.FC = () => {
  const { motionEnabled, setMotionEnabled } = useMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="theme-switcher" />;
  }

  return (
    <motion.button
      onClick={() => setMotionEnabled(!motionEnabled)}
      className="theme-switcher"
      aria-label={motionEnabled ? "Disable animations" : "Enable animations"}
      title={motionEnabled ? "Animations on" : "Animations off"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ opacity: motionEnabled ? 1 : 0.5 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0L9.25 4.75L14 6L9.25 7.25L8 12L6.75 7.25L2 6L6.75 4.75Z" />
        <path d="M12.5 10L13.25 12.25L15.5 13L13.25 13.75L12.5 16L11.75 13.75L9.5 13L11.75 12.25Z" opacity="0.6" />
      </svg>
    </motion.button>
  );
};
