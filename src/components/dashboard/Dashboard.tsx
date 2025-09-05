"use client";

import KPIsWrapper from "./KPIsWrapper";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./BarChartCustom";
import Statistics from "./Statistics";

export default function Dashboard({
  kpis,
  countriesByContinent,
}: {
  kpis: {
    totalCountries: number;
    totalContinents: number;
    totalLanguages: number;
  };
  countriesByContinent: { name: string; value: number }[];
}) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="p-8 space-y-8">
      {/* KPI Cards */}
      <KPIsWrapper
        totalCountries={kpis.totalCountries}
        totalContinents={kpis.totalContinents}
        totalLanguages={kpis.totalLanguages}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* PieChart */}
        <CustomPieChart
          totalCountries={kpis.totalCountries}
          COLORS={COLORS}
          countriesByContinent={countriesByContinent}
        />

        {/* BarChart */}
        <CustomBarChart
          countriesByContinent={countriesByContinent}
          COLORS={COLORS}
        />
      </div>

      <Statistics
        countriesByContinent={countriesByContinent}
        totalCountries={kpis.totalCountries}
        totalContinents={kpis.totalContinents}
        totalLanguages={kpis.totalLanguages}
      />
    </div>
  );
}
