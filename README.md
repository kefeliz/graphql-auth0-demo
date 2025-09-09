# GraphQL Auth0 Demo

<img width="1920" height="1077" alt="image" src="https://github.com/user-attachments/assets/0516e1b8-1b78-4ef5-aa45-4e2dd0707794" />


A demonstration project showcasing how to integrate GraphQL APIs with Auth0 authentication.  
Built primarily with **TypeScript**, with supporting JavaScript and CSS.

## Features

- GraphQL API setup
- Auth0 authentication integration
- Example queries and mutations
- TypeScript-first codebase

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Yarn or npm
- Auth0 account (for client credentials)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kefeliz/graphql-auth0-demo.git
    cd graphql-auth0-demo
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Configure environment variables:
    - Copy `.env.example` to `.env`
    - Fill in your Auth0 credentials and any other required variables

### Running the App

```bash
npm run dev
# or
yarn dev
```

The server should now be running locally.
Visit http://localhost:3000 (or the port specified in your .env) to interact.

### Technologies Used
  - TypeScript
  - GraphQL
  - Auth0
  - TailWindCSS
  - Recharts
