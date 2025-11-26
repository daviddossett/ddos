import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useId } from "react";

interface NavLink {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavLink[];
}

const mainLinks: NavLink[] = [
  { label: "Me", href: "/" },
  {
    label: "Work",
    children: [
      { label: "GitHub", href: "/github" },
      { label: "VS Code", href: "/vscode" },
      { label: "Microsoft", href: "/microsoft" },
      { label: "Side projects", href: "/side-projects" },
    ],
  },
];

const socialLinks: NavLink[] = [
  { label: "X", href: "https://x.com/david_dossett", external: true },
  { label: "GitHub", href: "https://github.com/daviddossett", external: true },
  { label: "Mail", href: "mailto:your-email@example.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daviddossett/", external: true },
];

function NavItem({ link }: { link: NavLink }) {
  const router = useRouter();
  const panelId = useId();
  const hasChildren = link.children && link.children.length > 0;

  // Check if any child is active (for parent items)
  const isChildActive = hasChildren && link.children?.some((child) => child.href && router.pathname === child.href);

  // Initialize expanded state based on whether a child is active
  const [isExpanded, setIsExpanded] = useState(isChildActive);

  // For items with href (leaf nodes)
  if (link.href && !hasChildren) {
    const isActive = router.pathname === link.href;

    if (link.external) {
      return (
        <li>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 no-underline cursor-ne-resize"
          >
            {link.label}
          </a>
        </li>
      );
    }

    return (
      <li>
        <Link
          href={link.href}
          className={`no-underline ${
            isActive
              ? "text-gray-900 dark:text-gray-100"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          }`}
        >
          {link.label}
        </Link>
      </li>
    );
  }

  // For items with children (expandable sections)
  if (hasChildren) {
    return (
      <li>
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-left bg-transparent border-none cursor-pointer p-0 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 outline-none focus-visible:underline focus-visible:decoration-solid focus-visible:underline-offset-4 focus-visible:decoration-emerald-400 dark:focus-visible:decoration-emerald-300"
        >
          {link.label}
        </button>
        <div
          id={panelId}
          className="grid transition-[grid-template-rows] duration-200 ease-out"
          style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
        >
          <ul role="group" className="list-none pl-4 py-0.5 flex flex-col overflow-hidden">
            {link.children?.map((child) => (
              <NavItem key={child.label} link={child} />
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return null;
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
