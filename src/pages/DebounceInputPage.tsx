import { useState } from "react";
import DebouncedInput from "../components/DebounceInput";

const DebouncedInputPage: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");

  const handleDebounce = (value: string) => {
    setDisplayText(value);
  };

  return (
    <div>
      <h1>Input with Debounce</h1>
      <DebouncedInput onDebounce={handleDebounce} />
      <p>Debounced Text: {displayText}</p>
    </div>
  );
};

export default DebouncedInputPage;
