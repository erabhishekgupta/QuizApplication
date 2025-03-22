import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary text-white">
      <h1 className="display-3 fw-bold">Welcome to the Quiz App</h1>
      <p className="lead">Test your knowledge with exciting questions!</p>
      
      <Link to="/quiz">
        <button className="btn btn-light btn-lg fw-bold px-4 py-2 mt-3 shadow-lg">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}
