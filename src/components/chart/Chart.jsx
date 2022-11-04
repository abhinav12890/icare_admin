import "./chart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    users: 10,
    amt: 10,
  },
  {
    name: "Feb",
    users: 20,
    amt: 20,
  },
  {
    name: "Mar",
    users: 30,
    amt: 30,
  },
  {
    name: "April",
    users: 10,
    amt: 10,
  },
  {
    name: "May",
    users: 20,
    amt: 20,
  },
  {
    name: "June",
    users: 30,
    amt: 30,
  },
  {
    name: "July",
    users: 40,
    amt: 40,
  },
];
const Chart = ({ aspect }) => {
  return (
    <div className="chart">
      <div className="title">Last 7 months update</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#0080ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
