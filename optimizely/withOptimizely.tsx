import React from "react";

import {
  createInstance,
  enums,
  OptimizelyProvider,
  ReactSDKClient,
  setLogLevel,
} from "@optimizely/react-sdk";
import OptimizelySSR from "../optimizely/optimizely_ssr";

const isBrowser: boolean = typeof window !== "undefined";

export const WithOptimizely = (PageComponent: any) => {
  const WithOptimizely = ({
    datafile,
    id,
    ...props
  }: {
    datafile: object;
    id: string;
  }) => {
    setLogLevel(enums.LOG_LEVEL.ERROR);
    const modifiedProps = { ...props };

    return (
      <>
        {isBrowser ? (
          <PageComponent {...props} />
        ) : (
          <OptimizelySSR datafile={datafile}>
            <PageComponent {...modifiedProps} />
          </OptimizelySSR>
        )}
      </>
    );
  };

  WithOptimizely.defaultProps = {
    datafile: {},
  };

  WithOptimizely.getInitialProps = PageComponent.getInitialProps;
  return WithOptimizely;
};
