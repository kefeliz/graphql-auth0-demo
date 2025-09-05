/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/graphqlClient";
import { GET_DASHBOARD_DATA } from "@/lib/queries";
import { DashboardData } from "@/models/dashboardData";
import Dashboard from "@/components/dashboard/Dashboard";

export default async function DashboardPage() {
  const result = (await client.request(GET_DASHBOARD_DATA)) as DashboardData;

  // KPI DATA
  const totalCountries = result.countries.length;
  const totalContinents = result.continents.length;
  const totalLanguages = result.languages.length;

  const continentCount = result.countries.reduce((acc: any, country: any) => {
    const cont = country.continent.name;
    acc[cont] = (acc[cont] || 0) + 1;
    return acc;
  }, {});

  const countriesByContinent = Object.entries(continentCount).map(
    ([name, value]) => ({
      name,
      value: Number(value),
    })
  );

  return (
    <>
      <Dashboard
        kpis={{ totalCountries, totalContinents, totalLanguages }}
        countriesByContinent={countriesByContinent}
      />
    </>
  );
}
