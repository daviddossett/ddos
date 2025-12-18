import { useState, useEffect, useMemo } from "react";
import Markdown from "react-markdown";

interface MarkdownRendererProps {
  path: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ path }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(path);
        const text = await res.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchData();
  }, [path]);

  const markdownComponents = useMemo(
    () => ({
      a: ({ node, ...props }: any) => (
        <a target="_blank" rel="noopener noreferrer" {...props} />
      ),
    }),
    []
  );

  return <Markdown components={markdownComponents}>{content}</Markdown>;
};
