import { motion } from "framer-motion";

export default function StatsCards({
  stats,
}) {
  const cards = [
    {
      title: "Total",
      value: stats.total,
    },
    {
      title: "Completed",
      value: stats.completed,
    },
    {
      title: "Pending",
      value: stats.pending,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
          }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <h3 className="text-slate-400">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-2">
            {card.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}