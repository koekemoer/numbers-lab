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

function sieve(limit: number): number[] {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    const primes: number[] = [];

    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) primes.push(i);
    }

    return primes;
}

export default function PrimeGenerator() {
    const [limit, setLimit] = useState(100);
    const [primes, setPrimes] = useState<number[]>([]);

    const handleGenerate = () => {
        // const result = generatePrimes(limit);
        const result = sieve(limit);
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