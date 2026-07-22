import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <Image
        className="identity-avatar"
        src="/images/david-avatar.webp"
        alt=""
        width={48}
        height={48}
        sizes="48px"
        loading="eager"
        fetchPriority="high"
      />
      <span className="identity-name">
        David Dossett
      </span>
      <span className="identity-role">Product Designer</span>
    </header>
  );
};
