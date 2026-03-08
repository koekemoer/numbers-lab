import { useState } from "react";

function generatePrimes(limit: number): number[] {
    const primes: number[] = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

export default function PrimeGenerator() {
    const [limit, setLimit] = useState(100);
    const [primes, setPrimes] = useState<number[]>([]);

    const handleGenerate = () => {
        const result = generatePrimes(limit);
        setPrimes(result);
    };

    return(
        <div>
            <h1>Prime Number Generator</h1>

            <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
            />

            <button onClick={handleGenerate}>Generate</button>

            <p>
                {primes.length > 0 && primes.join(",")}
            </p>
        </div>
    )
}