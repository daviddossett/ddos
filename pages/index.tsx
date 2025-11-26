import Layout from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <p>
          Hi, I'm David. I'm a designer and okayish developer based in Seattle. I'm currently working at{" "}
          <Link href="https://github.com" target="_blank">
            GitHub
          </Link>{" "}
          building{" "}
          <Link href="https://github.com/features/copilot" target="_blank">
            Copilot
          </Link>
          .
        </p>
        <p>
          Previously, I led design for{" "}
          <Link href="https://code.visualstudio.com" target="_blank">
            VS Code
          </Link>{" "}
          at Microsoft.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis.
        </p>

        {/* Image placeholder */}
        <div className="w-full h-96 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
      </div>
    </Layout>
  );
}
