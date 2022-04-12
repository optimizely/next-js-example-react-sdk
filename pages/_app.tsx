import {
  createInstance,
  enums,
  OptimizelyProvider,
  ReactSDKClient,
  setLogLevel,
} from "@optimizely/react-sdk";
import type { AppProps } from "next/app";

let optimizely: ReactSDKClient | null = null;

function MyApp({ Component, pageProps }: AppProps) {
  if (!optimizely) {
    optimizely = createInstance({
      sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY,
    });
  }

  setLogLevel(enums.LOG_LEVEL.ERROR);

  const modifiedProps = { ...pageProps, optimizely };

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: "123",
        attributes: {},
      }}
    >
      <Component {...modifiedProps} />
    </OptimizelyProvider>
  );
}

export default MyApp;
