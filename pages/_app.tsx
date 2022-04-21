import {
  createInstance,
  enums,
  OptimizelyProvider,
  ReactSDKClient,
  setLogLevel,
} from "@optimizely/react-sdk";
import type { AppProps } from "next/app";
import { getDatafile } from "../optimizely/datafile_provider";

let optimizely: ReactSDKClient | null = null;
const isBrowser: boolean = typeof window !== "undefined";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let sdkOpts: {
    sdkKey?: string;
    datafile?: object;
    datafileOptions?: {
      autoUpdate?: boolean;
      updateInterval?: number;
    };
  } = {};

  if (!optimizely) {
    if (isBrowser) {
      sdkOpts.sdkKey = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;
    } else {
      sdkOpts.datafile = pageProps.datafile; // or import datafile here
      sdkOpts.sdkKey = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;
      sdkOpts.datafileOptions = {
        autoUpdate: true,
        updateInterval: 5000,
      };
    }
    optimizely = createInstance(sdkOpts);
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
      isServerSide={!isBrowser}
    >
      <Component {...modifiedProps} />
    </OptimizelyProvider>
  );
};

export default MyApp;

MyApp.getInitialProps = async ({}) => {
  if (!isBrowser) {
    const datafile = await getDatafile();
    return {
      pageProps: {
        datafile,
      },
    };
  } else return {};
};
