import Head from "next/head";
import Link from "next/link";
import { Header } from "./header";
import { Nav } from "./nav";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

function Layout({ children, title, description }: LayoutProps): JSX.Element {
  const isDev = process.env.NODE_ENV === "development";
  const pageTitle = title || "David Dossett";
  const fullTitle = isDev ? `${pageTitle} — Dev` : pageTitle;
  const pageDescription = description || "Product designer at GitHub";
  const siteUrl = "https://ddossett.com";

  return (
    <div className="min-h-screen w-full px-12 py-12 md:px-20 md:py-24">
      <Head>
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

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[100px_fit-content(280px)_1fr] md:gap-16 items-start">
        {/* Column 1: Branding */}
        <h1 className="flex justify-items-center gap-2 text-base font-normal dark:text-slate-400">
          <Link className="text-base tracking-[-0.0125rem] text-slate-900 dark:text-slate-50" href="/">
            David Dossett
          </Link>
        </h1>

        {/* Column 2: Navigation */}
        <Nav />

        {/* Column 3: Content */}
        <main className="flex justify-center">
          <div className="max-w-lg">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
