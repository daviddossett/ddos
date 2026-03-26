import { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const [isHC, setIsHC] = useState(false);

  useEffect(() => {
    setIsHC(document.documentElement.getAttribute("data-theme") === "hc");
  }, []);

  const toggle = () => {
    const next = !isHC;
    setIsHC(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "hc");
      localStorage.setItem("theme", "hc");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={isHC ? "Disable high contrast mode" : "Enable high contrast mode"}
      title={isHC ? "Disable high contrast mode" : "Enable high contrast mode"}
      className="hc-toggle"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1a7 7 0 010 14V1z" fill="currentColor" />
      </svg>
    </button>
  );
};
