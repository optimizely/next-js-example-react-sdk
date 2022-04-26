# Optimizely Full Stack Feature Flags and Experimentation

[Optimizely Full Stack](https://docs.developers.optimizely.com/experimentation/v4.0.0-full-stack/docs) is a feature flagging and experimentation platform for websites, mobile apps, chatbots, APIs, smart devices, and anything else with a network connection.

You can deploy code behind feature flags, experiment with A/B tests, and roll out or roll back features immediately. All of this functionality is available with minimal performance impact via easy-to-use, open source SDKs.

# Sample Application for NextJS

this application demonstrates using Optimizely React SDK with NextJS and works with both client and server side rendering.

## How It works

### Pre-fetch datafile at build time for server side rendering
Optimizely SDK can be initialized both with a hardcoded datafile and a sdk Key. Server side rendering requires a hardcoded datafile to be present for the first time rendering. This application uses the SDK Key provided in the `NEXT_PUBLIC_OPTIMIZELY_SDK_KEY` environment variable to pre-fetch the datafile and use it for first time rendering. This pre-fetching is done by intercepting the build mechanism using a custom [`with_optimizely_datafile`](scripts/with_optimizely_datafile.js) script.

### Custom App
React SDK requires the whole App to be wrapped in `OptimizelyProvider` component. This application uses [`Next JS Custom App`](https://nextjs.org/docs/advanced-features/custom-app) i.e [`_app.tsx`](pages/_app.tsx) to wrap the application in `OptimizelyProvider` component.

### Same code for client and SSR
The custom App runs similarly for both client and server. The optimizely instance is initialized once for both client and server and is reused throughout the application lifecycle. The hardcoded datafile makes it possible to use optimizely flags for the first time rendering. The sdkKey and datafile auto update enables the application to use the latest experiment / flag configuration.
