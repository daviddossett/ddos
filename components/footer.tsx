import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "https://twitter.com/david_dossett", label: "Twitter" },
  { href: "https://github.com/daviddossett", label: "GitHub" },
  { href: "https://www.linkedin.com/in/davidcdossett/", label: "LinkedIn" },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex space-x-4 gap-1 py-16">
      {links.map((link) => (
        <motion.div
          key={link.label}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={link.href} target="blank">
            {link.label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
