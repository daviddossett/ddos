import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="flex space-x-4 gap-2 py-16">
      <Link href="https://twitter.com/david_dossett" target="blank">
        Twitter
      </Link>
      <Link href="https://github.com/daviddossett" target="blank">
        GitHub
      </Link>
      <Link href="https://www.linkedin.com/in/davidcdossett/" target="blank">
        LinkedIn
      </Link>
    </div>
  );
};
