import React, { useEffect, useRef, useState } from "react";

interface DebouncedInputProps {
  onDebounce: (value: string) => void; // Define a prop for the callback function
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({ onDebounce }) => {
  const [value, setValue] = useState<string>("");
  const debounceTimer = useRef<number | null>(null);

  const debounce = (value: string, delay: number) => {
    if (debounceTimer.current !== null) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = window.setTimeout(() => {
      onDebounce(value); // Execute the passed callback function
    }, delay);
  };

  useEffect(() => {
    debounce(value, 500);

    return () => {
      if (debounceTimer.current !== null) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [value, onDebounce]); // Include onDebounce in the dependencies array

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export default DebouncedInput;
