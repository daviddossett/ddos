import Link from "next/link";
import React from "react";

export const Footer: React.FC = React.memo(() => {
  return (
    <div className="flex space-x-4 gap-1 py-16">
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
});

Footer.displayName = 'Footer';
