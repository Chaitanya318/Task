import { useEffect, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function TaskModal({
  open,
  setOpen,
  fetchTasks,
  editingTask,
  setEditingTask,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description:
          editingTask.description,
      });
    }
  }, [editingTask]);

  if (!open) return null;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (editingTask) {
        await API.put(
          `/tasks/${editingTask._id}`,
          form
        );

        toast.success(
          "Task Updated"
        );
      } else {
        await API.post(
          "/tasks",
          form
        );

        toast.success(
          "Task Created"
        );
      }

      fetchTasks();

      setOpen(false);

      setEditingTask(null);

      setForm({
        title: "",
        description: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <form
        onSubmit={submitHandler}
        className="bg-slate-900 p-6 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-5">
          {editingTask
            ? "Edit Task"
            : "Add Task"}
        </h2>

        <input
          type="text"
          placeholder="Task Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-slate-800 mb-4"
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value,
            })
          }
          className="w-full p-3 rounded-xl bg-slate-800 mb-5"
          rows={4}
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 p-3 rounded-xl"
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setEditingTask(null);
            }}
            className="flex-1 bg-slate-700 p-3 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}