import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-4 py-2 flex justify-between">
      <h1 className="text-xl font-bold">Radiology System</h1>
      <div className="flex gap-4 items-center">
        {user && <span>{user?.role.toUpperCase()}</span>}
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
