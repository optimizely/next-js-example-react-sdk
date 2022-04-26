import {
  createInstance,
  enums,
  OptimizelyProvider,
  ReactSDKClient,
  setLogLevel,
} from "@optimizely/react-sdk";
import { AppProps } from "next/app";
import optimizelyDatafile from '../lib/optimizely/datafile.json'

setLogLevel(enums.LOG_LEVEL.ERROR);

const optimizely: ReactSDKClient = createInstance({
  datafile: optimizelyDatafile,
  sdkKey: process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY,
  datafileOptions: {
    autoUpdate: true,
    updateInterval: 60000,
  }
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: "USER_ID_HERE",
      }}
    >
      <Component {...pageProps} />
    </OptimizelyProvider>
  );
};

export default MyApp;
