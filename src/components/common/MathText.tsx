import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text?: string;
  className?: string;
  as?: "span" | "p" | "div" | "h3" | "h4" | "h5";
}

export const MathText: React.FC<MathTextProps> = ({
  text = "",
  className,
  as: Component = "span",
}) => {
  if (!text) return null;

  // Quick optimization: if no '$' exists, just render plain text
  if (!text.includes("$")) {
    return <Component className={className}>{text}</Component>;
  }

  const renderedContent = useMemo(() => {
    // Match $$block math$$ or $inline math$
    const regex = /\$\$([\s\S]+?)\$\$|\$([^\$\n]+?)\$/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        elements.push(text.slice(lastIndex, matchIndex));
      }

      const isBlock = Boolean(match[1]);
      const mathExpr = match[1] || match[2];

      try {
        const html = katex.renderToString(mathExpr.trim(), {
          displayMode: isBlock,
          throwOnError: false,
        });
        elements.push(
          <span
            key={`${matchIndex}-${mathExpr}`}
            className="katex-rendered inline-block mx-0.5 align-baseline font-normal"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (e) {
        elements.push(match[0]);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  }, [text]);

  return <Component className={className}>{renderedContent}</Component>;
};

export default MathText;
