import {
  createInstance,
  enums,
  OptimizelyProvider,
  ReactSDKClient,
  setLogLevel,
} from "@optimizely/react-sdk";
import { AppProps } from "next/app";

// This is an auto fetched datafile during build time using the SDK key provided as an env variable.
import optimizelyDatafile from '../lib/optimizely/datafile.json'

setLogLevel(enums.LOG_LEVEL.ERROR);

const optimizely: ReactSDKClient = createInstance({
  // Use prefetched datafile on first use.
  datafile: optimizelyDatafile,

  // Providing SDK key will enable SDK to keep the datafile auto updated for subsequent uses.
  sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY,

  // for NextJS, always probide explicit values for datafileOptions.
  // The same peice of code works for server and client and default values for these options are different for both.
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 60000, // ms
  }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{ id: "USER_ID_HERE" }}
    >
      <Component {...pageProps} />
    </OptimizelyProvider>
  );
};

export default MyApp;
