import { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface MarkdownRendererProps {
  path: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ path }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(path, { signal: controller.signal });
        const text = await res.text();
        setContent(text);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Error fetching markdown content:", error);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [path]);

  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a target="_blank" rel="noopener noreferrer nofollow" {...props} />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};
