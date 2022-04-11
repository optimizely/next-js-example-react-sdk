import {
  createInstance,
  enums,
  OptimizelyProvider,
  setLogLevel,
} from "@optimizely/react-sdk";

let optimizely = null;
function MyApp({ Component, pageProps }) {
  if (!optimizely) {
    optimizely = createInstance({
      sdkKey: process.env.NEXT_PUBLIC_SDK_KEY,
    });
  }

  setLogLevel(enums.LOG_LEVEL.ERROR);

  const modifiedProps = { ...pageProps, optimizely };

  return (
    <>
      <OptimizelyProvider
        optimizely={optimizely}
        user={{
          id: "123",
          attributes: {},
        }}
      >
        <Component {...modifiedProps} />
      </OptimizelyProvider>
    </>
  );
}

export default MyApp;
