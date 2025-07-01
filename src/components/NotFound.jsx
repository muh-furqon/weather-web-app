import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-lg">Page not found</p>
      <Link to="/" className="text-blue-500 underline mt-4 inline-block">
        Go back to home
      </Link>
    </div>
  );
}
