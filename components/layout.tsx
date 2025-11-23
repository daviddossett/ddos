import Head from "next/head";
import { Header } from "./header";

interface LayoutProps {
  children: any;
  title?: string;
  description?: string;
}

function Layout({ children, title, description }: LayoutProps): JSX.Element {
  const isDev = process.env.NODE_ENV === "development";
  const pageTitle = title || "David Dossett";
  const fullTitle = isDev ? `${pageTitle} — Dev` : pageTitle;
  const pageDescription =
    description || "Product designer at GitHub working on Copilot. Previously led design for VS Code at Microsoft.";
  const siteUrl = "https://ddossett.com";

  return (
    <div className="max-w-[960px] mx-auto w-full px-4">
      <Head>
        <html lang="en" />
        <title>{fullTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
