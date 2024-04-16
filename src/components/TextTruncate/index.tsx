import React from "react";

// TypeScript module augmentation to include non-standard CSS properties
declare module "react" {
  interface CSSProperties {
    WebkitBoxOrient?: "vertical";
    WebkitLineClamp?: number;
  }
}

interface TextTruncateProps {
  line: number;
  element: keyof JSX.IntrinsicElements;
  truncateText: string;
  text: string;
  textTruncateChild?: React.ReactNode;
}

const TextTruncate: React.FC<TextTruncateProps> = ({
  line,
  element: Element,
  truncateText,
  text,
  textTruncateChild,
}) => {
  const containerStyle: React.CSSProperties = {
    position: "relative",
    maxWidth: "100%", // Ensure this is set appropriately to fit its parent container
    overflow: "hidden",
  };

  const textStyle: React.CSSProperties = {
    textAlign: "left",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: line,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const childStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white", // Match the background to the container's background
    padding: "0 4px", // Adjust padding as necessary to match design
    display: "inline",
    whiteSpace: "nowrap",
  };

  return (
    <Element style={containerStyle}>
      <div style={textStyle}>{text}</div>
      {textTruncateChild && (
        <span style={childStyle}>
          {truncateText}
          {textTruncateChild}
        </span>
      )}
    </Element>
  );
};

export default TextTruncate;
