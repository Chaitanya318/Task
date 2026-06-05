import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl px-6 py-4 flex items-center justify-between top-4 z-50"
    >
      <div>
        <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          TaskFlow
        </h1>

        <p className="text-sm text-slate-400">
          Welcome back, {user?.name} 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block text-right">
          <p className="font-medium">
            {user?.name}
          </p>

          <p className="text-xs text-slate-400">
            {user?.email}
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-bold">
          {user?.name?.charAt(0)}
        </div>

        <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>
    </motion.nav>
  );
}