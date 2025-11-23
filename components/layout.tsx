import Head from "next/head";
import { Header } from "./header";

function Layout({ children }: any): JSX.Element {
  const isDev = process.env.NODE_ENV === "development";
  const title = isDev ? "David Dossett — Dev" : "David Dossett";

  return (
    <div className="max-w-[960px] mx-auto w-full px-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Product designer at Microsoft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
