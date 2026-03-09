import { useState } from "react";

function convertBase(value: string, fromBase: number, toBase: number) {
    const decimal = parseInt(value, fromBase);

    if (isNaN(decimal)) return "Invalid Number"

    return decimal.toString(toBase).toUpperCase();
}

export default function BaseConverter() {
    const [value, setValue] = useState("");
    const [fromBase, setFromBase] = useState(10);
    const [toBase, setToBase] = useState(2);
    const [result, setResult] = useState("");

    const handleConvert = () => {
        const converted = convertBase(value, fromBase, toBase);
        setResult(converted);
    }

    return (
    <div>
      <h1>Base Converter</h1>

      <div>
        <input
          type="text"
          placeholder="Enter number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div>
        <label>From:</label>
        <select
          value={fromBase}
          onChange={(e) => setFromBase(Number(e.target.value))}
        >
          <option value={2}>Binary</option>
          <option value={10}>Decimal</option>
          <option value={16}>Hexadecimal</option>
        </select>
      </div>

      <div>
        <label>To:</label>
        <select
          value={toBase}
          onChange={(e) => setToBase(Number(e.target.value))}
        >
          <option value={2}>Binary</option>
          <option value={10}>Decimal</option>
          <option value={16}>Hexadecimal</option>
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      <h2>Result</h2>
      <p>{result}</p>
    </div>
  );
}