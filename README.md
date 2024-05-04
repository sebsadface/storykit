# Storykit

Plug-and-play React components for Story Protocol.

## Installation

_Storykit is a private package so you need repo access and a personal access token to use_

1. Create a personal access token: [github.com/settings/tokens](https://github.com/settings/tokens)

2. Login with Story Protocol scope:

```bash
npm login --scope=@storyprotocol --registry=https://npm.pkg.github.com
```

3. Use your github username and personal access token (for password) to login

4. Install the package and the required react-query dependencies

```bash
npm install @storyprotocol/storykit @tanstack/react-query
```

## Usage

Using Storykit in your React app

### Import the css

```typescript
import "@storyprotocol/storykit/dist/build.css"
```

### Include React Query

Don't forget that react query is a dependency, you will need to wrap Storykit components with a `QueryClientProvider`, you can do this once at the root of the app.

```typescript
import Providers from "./Providers"

import "@storyprotocol/storykit/dist/build.css"

export default function Layout({children}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

```typescript
"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

```

### The IPAssetProvider

The IPAssetProvider provides IP Asset data to child components.

```typescript
import { IPAssetProvider, useIPAssetContext } from "@storyprotocol/storykit"

const ExamplePage = () => {
  return (
      <IPAssetProvider ipId={"0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd"}>
        <ExampleComponent />
      </IPAssetProvider>
  );
};

const ExampleComponent = () => {
  const { nftData, isNftDataLoading } = useIPAssetContext()

  return (
    <div>
      {isNftDataLoading && <div>Fetching Asset...</div>}

      {nftData && !isNftDataLoading ? (
        <div>nft id: {nftData.nft_id}</div>
      ) : null}
    </div>
  );
};
```

### The IPAGraph

Some components require the IPAssetProvider to supply asset data

```typescript
import { IPAssetProvider, IPAGraph } from "@storyprotocol/storykit"

const ExamplePage = () => {
  return (
    <IPAssetProvider ipId={"0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd"}>
      <IPAGraph />
    </IPAssetProvider>
  );
};
```

### The IPAssetWidget

The IPAssetProvider is already included in the IPAssetWidget

```typescript
import { IPAssetWidget } from "@storyprotocol/storykit"

const ExamplePage = () => {
  return (
    <IPAssetWidget ipId={"0xbbf08a30b9ff0f717a024a75963d3196aaf0f0dd"} />
  )
}

```

See [the example app](/examples/next-app/app/page.tsx).

## Contributing

### Installation

```bash
pnpm install
```

### Run Storybook

Build components within the Storybook workshop environment.

```bash
pnpm storybook
```

### Formatting w\ prettier, linting w\ eslint & running tests

```bash
pnpm format
pnpm lint
pnpm test
```

### Bundle `/dist` package

```bash
pnpm build
```

## Running examples

From the root, build a package

```bash
pnpm build
```

Link `storykit` for use locally

```bash
pnpm link --global
```

Install the example app

```bash
cd examples/next-app
pnpm install
```

Link the `storykit` package and start the app

```bash
pnpm link --global @storyprotocol/storykit
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
