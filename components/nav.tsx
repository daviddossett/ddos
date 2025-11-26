import Link from "next/link";
import { useRouter } from "next/router";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

const mainLinks: NavLink[] = [
  { label: "Me", href: "/" },
  { label: "Projects", href: "/work" },
];

const socialLinks: NavLink[] = [
  { label: "X", href: "https://x.com/david_dossett", external: true },
  { label: "GitHub", href: "https://github.com/daviddossett", external: true },
  { label: "Mail", href: "mailto:your-email@example.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daviddossett/", external: true },
];

function NavItem({ link }: { link: NavLink }) {
  const router = useRouter();
  const isActive = router.pathname === link.href;

  if (link.external) {
    return (
      <li>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 no-underline cursor-ne-resize"
        >
          <span className="w-1 h-1 shrink-0" />
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={link.href}
        className={`flex items-center gap-2 no-underline ${
          isActive
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        }`}
      >
        <span className={`w-2 text-xs shrink-0 ${isActive ? "text-emerald-400 dark:text-emerald-300" : "opacity-0"}`}>
          ❯
        </span>
        {link.label}
      </Link>
    </li>
  );
}

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-6">
      <ul role="list" className="list-none p-0 m-0 flex flex-col">
        {mainLinks.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </ul>
      <ul role="list" className="list-none p-0 m-0 flex flex-col">
        {socialLinks.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </ul>
    </nav>
  );
}
