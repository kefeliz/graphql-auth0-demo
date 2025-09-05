/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "../ui/Card";
import {
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Props = {
  totalCountries: number;
  COLORS: string[];
  countriesByContinent: { name: string; value: number }[];
};

export default function CustomPieChart(data: Props) {
  const { totalCountries, COLORS, countriesByContinent } = data;

  const CustomPieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-gray-200/50">
          <p className="font-semibold text-gray-900 mb-1">{payload[0].name}</p>
          <p className="text-indigo-600 font-medium">
            {payload[0].value} countries (
            {((payload[0].value / totalCountries) * 100).toFixed(1)}%)
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">📊</span>
          </div>
          <CardTitle className="text-xl text-gray-800">
            Distribution by Continent
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                {COLORS.map((color, index) => (
                  <linearGradient
                    key={index}
                    id={`pieGradient${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={color} stopOpacity={0.8} />
                    <stop offset="100%" stopColor={color} stopOpacity={1} />
                  </linearGradient>
                ))}
              </defs>
              <Pie
                dataKey="value"
                data={countriesByContinent}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={140}
                paddingAngle={2}
                label={({ name, percent }) =>
                  `${name} ${(percent! * 100).toFixed(1)}%`
                }
                labelLine={false}
              >
                {countriesByContinent.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={`url(#pieGradient${index % COLORS.length})`}
                    stroke="#fff"
                    strokeWidth={2}
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomPieTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
