export default function SearchFilter({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 p-3 rounded-xl bg-slate-900"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="p-3 rounded-xl bg-slate-900"
      >
        <option value="">
          All
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="completed">
          Completed
        </option>
      </select>
    </div>
  );
}