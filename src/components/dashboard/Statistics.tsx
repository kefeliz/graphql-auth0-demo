import React from "react";
import { Card, CardContent } from "../ui/Card";

type Props = {
  countriesByContinent: { name: string; value: number }[];
  totalCountries: number;
  totalContinents: number;
  totalLanguages: number;
};

export default function Statistics(data: Props) {
  const {
    countriesByContinent,
    totalCountries,
    totalContinents,
    totalLanguages,
  } = data;
  return (
    <Card className="bg-gradient-to-r from-gray-50 to-white">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-600">
              {Math.max(...countriesByContinent.map((c) => c.value))}
            </p>
            <p className="text-sm text-gray-600">Greater concentration</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">
              {Math.min(...countriesByContinent.map((c) => c.value))}
            </p>
            <p className="text-sm text-gray-600">Lower concentration</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-600">
              {(totalCountries / totalContinents).toFixed(1)}
            </p>
            <p className="text-sm text-gray-600">Average by continent</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">
              {(totalLanguages / totalCountries).toFixed(1)}
            </p>
            <p className="text-sm text-gray-600">Languages by country</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
