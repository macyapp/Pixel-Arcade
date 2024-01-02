import { useState } from "react";
import "./ExpandableText.css"; // Import the CSS file

interface ExpandableTextProps {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: ExpandableTextProps) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChar) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChar) + "...";

  return (
    <>
      <p>
        {text}
        <span
          className="expandable-text"
          onClick={() => setExpanded(!isExpanded)}
        >
          {children.length > maxChar && isExpanded ? "less" : "more"}
        </span>
      </p>
    </>
  );
};

export default ExpandableText;
