import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Weather App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/showcase" className="hover:underline">Showcase</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
