import Link from "next/link";
import { useRouter } from "next/router";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const mainLinks: NavLink[] = [
  { label: "Me", href: "/" },
  { label: "Work", href: "/work" },
];

const socialLinks: NavLink[] = [
  { label: "X", href: "https://x.com/david_dossett", external: true },
  { label: "GitHub", href: "https://github.com/daviddossett", external: true },
  { label: "Mail", href: "mailto:your-email@example.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daviddossett/", external: true },
];

export function Nav() {
  const router = useRouter();

  return (
    <nav className="flex flex-col gap-6">
      <div className="flex flex-col">
        {mainLinks.map((link) => {
          const isActive = router.pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative group no-underline ${
                isActive
                  ? "text-gray-900 dark:text-gray-100 font-medium"
                  : "text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {isActive ? (
                <span className="absolute -left-4 text-3xl font-bold leading-3 text-emerald-400 dark:text-emerald-300">
                  .
                </span>
              ) : (
                <span className="absolute -left-4 text-3xl font-bold leading-3 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100">
                  .
                </span>
              )}
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 no-underline cursor-ne-resize"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
