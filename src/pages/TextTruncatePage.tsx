import React, { useState } from "react";
import TextTruncate from "../components/TextTruncate";

const TextTruncatePage: React.FC = () => {
  const [line, setLine] = useState<number>(2);
  const [element, setElement] = useState<keyof JSX.IntrinsicElements>("div");
  const [text, setText] = useState<string>(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  );
  const [truncateText, setTruncateText] = useState<string>("...");
  const [childText, setChildText] = useState<string>("Read on");

  const containerStyle: React.CSSProperties = {
    display: "flex",
    padding: "20px",
  };

  const sectionStyle: React.CSSProperties = {
    margin: "10px",
    flex: 1,
    padding: "10px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "20px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <label style={labelStyle}>
          Lines to truncate:
          <input
            style={inputStyle}
            type="number"
            value={line}
            onChange={(e) => setLine(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
        <label style={labelStyle}>
          Element:
          <select
            style={inputStyle}
            value={element}
            onChange={(e) =>
              setElement(e.target.value as keyof JSX.IntrinsicElements)
            }
          >
            <option value="p">Paragraph (p)</option>
            <option value="div">Division (div)</option>
          </select>
        </label>
        <label style={labelStyle}>
          Text:
          <textarea
            style={{ ...inputStyle, height: "100px" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <label style={labelStyle}>
          Truncate Text:
          <input
            style={inputStyle}
            type="text"
            value={truncateText}
            onChange={(e) => setTruncateText(e.target.value)}
          />
        </label>
        <label style={labelStyle}>
          Truncate Child Text:
          <input
            style={inputStyle}
            type="text"
            value={childText}
            onChange={(e) => setChildText(e.target.value)}
          />
        </label>
      </div>

      <div style={sectionStyle}>
        <TextTruncate
          line={line}
          element={element}
          truncateText={truncateText}
          text={text}
          textTruncateChild={<a href="#">{childText}</a>}
        />
      </div>
    </div>
  );
};

export default TextTruncatePage;
