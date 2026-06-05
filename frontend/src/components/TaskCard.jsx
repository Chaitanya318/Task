import { motion } from "framer-motion";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function TaskCard({
  task,
  fetchTasks,
  setEditingTask,
  setShowModal,
}) {
  const deleteTask = async () => {
    try {
      await API.delete(
        `/tasks/${task._id}`
      );

      toast.success(
        "Task Deleted"
      );

      fetchTasks();
    } catch {
      toast.error(
        "Delete Failed"
      );
    }
  };

  const toggleStatus = async () => {
    try {
      await API.patch(
        `/tasks/toggle/${task._id}`
      );

      fetchTasks();
    } catch {
      toast.error(
        "Update Failed"
      );
    }
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
    >
      <h3 className="text-xl font-bold">
        {task.title}
      </h3>

      <p className="text-slate-400 mt-2">
        {task.description}
      </p>

      <span
        className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
          task.status === "completed"
            ? "bg-green-500"
            : "bg-yellow-500"
        }`}
      >
        {task.status}
      </span>

      <div className="flex gap-2 mt-5">
        <button
          onClick={() => {
            setEditingTask(task);
            setShowModal(true);
          }}
          className="bg-blue-600 px-3 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={deleteTask}
          className="bg-red-600 px-3 py-2 rounded-lg"
        >
          Delete
        </button>

        <button
          onClick={toggleStatus}
          className="bg-green-600 px-3 py-2 rounded-lg"
        >
          Toggle
        </button>
      </div>
    </motion.div>
  );
}