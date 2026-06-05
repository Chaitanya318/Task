const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskStats,
  toggleTaskStatus
} = require("../controllers/taskController");

router.post("/", protect, createTask);

router.get("/", protect, getTasks);

router.put("/:id", protect, updateTask);

router.get("/stats", protect, getTaskStats);

router.delete("/:id", protect, deleteTask);

router.patch(
  "/toggle/:id",
  protect,
  toggleTaskStatus
);

module.exports = router;