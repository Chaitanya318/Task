import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import TaskCard from "../components/TaskCard";
import SearchFilter from "../components/SearchFilter";
import TaskModal from "../components/TaskModal";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const fetchTasks = async () => {
    const { data } = await API.get(`/tasks?search=${search}&status=${status}`);

    setTasks(data.tasks || data);
  };

  const getStats = async () => {
    const { data } = await API.get("/tasks/stats");

    setStats(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [search, status]);

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <Navbar />

        <StatsCards stats={stats} />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-xl"
          >
            + Add Task
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              fetchTasks={fetchTasks}
              setEditingTask={setEditingTask}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      </div>

      <TaskModal
        open={showModal}
        setOpen={setShowModal}
        fetchTasks={fetchTasks}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
    </div>
  );
}
