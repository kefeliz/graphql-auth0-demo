export interface Countries {
  countries: CountryDetail[];
}

interface CountryDetail {
  name: string;
  code: string;
  continent: {
    name: string;
  };
  languages: {
    name: string;
  };
}
