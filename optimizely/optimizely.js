import { createInstance } from "@optimizely/react-sdk";

export const getOrInitializeOptimizely = ({ datafile, isBrowser }) => {
  if (!isBrowser) {
    return createInstance({ datafile });
  }
};
