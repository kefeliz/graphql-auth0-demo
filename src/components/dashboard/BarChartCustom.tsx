/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "../ui/Card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  COLORS: string[];
  countriesByContinent: { name: string; value: number }[];
};

export default function CustomBarChart(data: Props) {
  const { COLORS, countriesByContinent } = data;
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-gray-200/50">
          <p className="font-semibold text-gray-900 mb-1">{label}</p>
          <p className="text-indigo-600 font-medium">
            Countries: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg">📈</span>
          </div>
          <CardTitle className="text-xl text-gray-800">
            Ranking of continents
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...countriesByContinent].sort((a, b) => b.value - a.value)}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <defs>
                <linearGradient
                  id="barGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                fontSize={12}
                stroke="#6b7280"
              />
              <YAxis fontSize={12} stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="url(#barGradient)"
                radius={[8, 8, 0, 0]}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              >
                {countriesByContinent.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
