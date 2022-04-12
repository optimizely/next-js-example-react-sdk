import { OptimizelyProvider, createInstance } from "@optimizely/react-sdk";
import { ReactChild } from "react";

const OptimizelySSR = ({
  children,
  datafile,
}: {
  children: ReactChild;
  datafile: object;
}) => {
  const optimizely = createInstance({ datafile });

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: "123",
        attributes: {},
      }}
      isServerSide={true}
    >
      {children}
    </OptimizelyProvider>
  );
};

export default OptimizelySSR;
