import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer
      className="content-section flex flex-wrap pb-4"
      aria-label="Social links"
      style={{ columnGap: "2rem", rowGap: "0.75rem" }}
    >
      <Link
        href="https://twitter.com/david_dossett"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        href="https://github.com/daviddossett"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/davidcdossett/"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </footer>
  );
};
