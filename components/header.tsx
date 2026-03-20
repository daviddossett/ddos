import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center pt-8">
      <h1 className="flex justify-items-center gap-2 text-base font-normal">
        <Link className="text-base font-normal text-theme-heading hover:text-theme-heading" href="/">
          David Dossett
        </Link>
        <span className="text-2xl font-bold leading-3 text-theme-dot">.</span>
        Seattle, WA
      </h1>
      <ThemeSwitcher />
    </header>
  );
};
