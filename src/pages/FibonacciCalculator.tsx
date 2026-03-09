import { useState } from "react";

function generateFibonacci(n: number): number[] {
  if (n <= 0) return [];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n);
}

export default function FibonacciCalculator() {
  const [count, setCount] = useState(10);
  const [sequence, setSequence] = useState<number[]>([]);

  const handleGenerate = () => {
    setSequence(generateFibonacci(count));
  };

  return (
    <div>
      <h1>Fibonacci Calculator</h1>

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />

      <button onClick={handleGenerate}>Generate</button>

      <p>{sequence.join(", ")}</p>
    </div>
  );
}