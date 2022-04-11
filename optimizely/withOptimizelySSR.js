import React, { useMemo } from "react";
import {
  createInstance,
  enums,
  OptimizelyProvider,
  setLogLevel,
} from "@optimizely/react-sdk";

import { getOrInitializeOptimizely } from "./optimizely";

const isBrowser = typeof window !== "undefined";

export const withOptimizelySSR = (PageComponent) => {
  const WithOptimizely = ({ datafile, id, ...props }) => {
    const optimizely = getOrInitializeOptimizely({ datafile, isBrowser });
    setLogLevel(enums.LOG_LEVEL.ERROR);
    const modifiedProps = { ...props, optimizely };

    return (
      <>
        {isBrowser ? (
          <PageComponent {...props} />
        ) : (
          <OptimizelyProvider
            optimizely={optimizely}
            user={{
              id: "123",
              attributes: {},
            }}
            isServerSide={!isBrowser}
          >
            <PageComponent {...modifiedProps} />
          </OptimizelyProvider>
        )}
      </>
    );
  };

  WithOptimizely.defaultProps = {
    datafile: {},
  };

  WithOptimizely.getInitialProps = PageComponent.getInitialProps;

  if (process.env.NODE_ENV !== "production") {
    // Set the correct displayName in development
    WithOptimizely.displayName = `withOptimizely(${PageComponent.name})`;
  }

  return WithOptimizely;
};
