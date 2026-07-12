import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const EventChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={data}
        barCategoryGap="25%"
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>

        <CartesianGrid
          strokeDasharray="5 5"
          stroke="#334155"
          vertical={false}
        />

        <XAxis
          dataKey="event"
          stroke="#94a3b8"
        />

        <YAxis
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          stroke="#94a3b8"
        />

        {/* Removes the white hover background */}
        <Tooltip
  cursor={false}
  contentStyle={{
    background: "#111827",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  }}
  labelStyle={{ color: "#60a5fa" }}
  formatter={(value) => [`${value}%`]}
  separator=""
/>
        <Bar
          dataKey="attendance"
          fill="url(#barGradient)"
          radius={[10, 10, 0, 0]}
          activeBar={false}
          animationDuration={1000}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EventChart;