import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "../ui/Card";

type Props = {
  totalCountries: number;
  totalContinents: number;
  totalLanguages: number;
};

export default function KPIsWrapper(data: Props) {
  const { totalCountries, totalContinents, totalLanguages } = data;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200/60">
        <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">🌍</span>
          </div>
          <CardTitle className="text-gray-700">Total Countries</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {totalCountries}
          </p>
          <p className="text-sm text-gray-600 mt-1">registered countries</p>
        </CardContent>
      </Card>

      <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200/60">
        <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">🗺️</span>
          </div>
          <CardTitle className="text-gray-700">Continents</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            {totalContinents}
          </p>
          <p className="text-sm text-gray-600 mt-1">continents</p>
        </CardContent>
      </Card>

      <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200/60">
        <CardHeader className="text-center pb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-white font-bold text-xl">💬</span>
          </div>
          <CardTitle className="text-gray-700">Languages</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            {totalLanguages}
          </p>
          <p className="text-sm text-gray-600 mt-1">Unique languages</p>
        </CardContent>
      </Card>
    </div>
  );
}
