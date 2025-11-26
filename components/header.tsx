import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center pt-8">
      <h1 className="flex justify-items-center gap-2 text-base font-normal dark:text-slate-400">
        <Link className="text-base font-normal text-slate-900 dark:text-slate-400" href="/">
          David Dossett
        </Link>
        <span className="text-2xl font-bold leading-3 text-blue-400">.</span>
        Seattle, WA
      </h1>
    </header>
  );
};
