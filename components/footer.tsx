import Link from "next/link";

// test change
export const Footer: React.FC = () => {
  return (
    <div className="flex space-x-4 gap-1 py-16">
      <Link
        href="https://twitter.com/david_dossett"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        href="https://github.com/daviddossett"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/davidcdossett/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </div>
  );
};
