import { useState, useEffect } from "react";
import { useTheme, Theme } from "./theme-provider";

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 1.5v2M8 12.5v2M2.75 2.75l1.5 1.5M11.75 11.75l1.5 1.5M1.5 8h2M12.5 8h2M2.75 13.25l1.5-1.5M11.75 4.25l1.5-1.5" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.2 9.2A5.5 5.5 0 1 1 6.8 2.8a4.4 4.4 0 0 0 6.4 6.4z" />
  </svg>
);

const ContrastIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="5.5" />
    <path d="M8 2.5v11a5.5 5.5 0 0 0 0-11z" fill="currentColor" />
  </svg>
);

const themes: { id: Theme; label: string; icon: JSX.Element }[] = [
  { id: "light", label: "Light", icon: <SunIcon /> },
  { id: "dark", label: "Dark", icon: <MoonIcon /> },
  { id: "high-contrast", label: "High contrast", icon: <ContrastIcon /> },
];

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].id);
  };

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  if (!mounted) {
    return <div className="theme-switcher" />;
  }

  return (
    <button
      onClick={cycleTheme}
      className="theme-switcher"
      aria-label={`Theme: ${currentTheme.label}. Click to switch.`}
      title={currentTheme.label}
    >
      {currentTheme.icon}
    </button>
  );
};
