import { useState, useEffect } from "react";
import Markdown from "react-markdown";

interface MarkdownRendererProps {
  path: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ path }) => {
  const [content, setContent] = useState("");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(path);
        if (!res.ok) {
          throw new Error(`Failed to fetch markdown: ${res.status}`);
        }
        const text = await res.text();
        setContent(text);
        setError(null);
      } catch (err) {
        console.error("Error fetching markdown content:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    };

    fetchData();
  }, [path]);

  if (error) {
    return <p>Error loading content: {error}</p>;
  }

  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a target="_blank" rel="noopener noreferrer" {...props} />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};
