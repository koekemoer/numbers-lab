import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Numbers Lab</h1>

      <ul>
        <li>
          <Link to="/prime-number-generator">
            Prime Number Generator
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;