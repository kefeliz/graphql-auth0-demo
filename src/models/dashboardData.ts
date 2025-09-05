import { Countries } from "./country";

export interface DashboardData {
  countries: Countries[];
  continents: continent[];
  languages: language[];
}

interface continent {
  code: string;
  name: string;
}

interface language {
  code: string;
  name: string;
}
