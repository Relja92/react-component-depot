import React, { useState } from "react";
import TextTruncate from "../components/TextTruncate";

const TextTruncatePage: React.FC = () => {
  const [line, setLine] = useState<number>(3);
  const [element, setElement] = useState<keyof JSX.IntrinsicElements>("div");
  const [text, setText] = useState<string>(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
