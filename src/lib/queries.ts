import { gql } from "graphql-request";

export const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
      continent {
        name
      }
    }
  }
`;

export const GET_DASHBOARD_DATA = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
    }
    continents {
      code
      name
    }
    languages {
      code
      name
    }
  }
`;
