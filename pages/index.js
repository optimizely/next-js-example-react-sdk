import { useDecision } from "@optimizely/react-sdk";

import { getDatafile } from "../optimizely/datafile-provider";
import { withOptimizelySSR } from "../optimizely/withOptimizelySSR";

const Home = (props) => {
  const [decision] = useDecision("product_sort");

  return (
    <>
      <h2>Welcome to optimizely next.js </h2>
      <div>Sort by : {decision.variables.sort_method}</div>
    </>
  );
};

export const getServerSideProps = async () => {
  const datafile = await getDatafile();

  return {
    props: {
      datafile,
    },
  };
};
export default withOptimizelySSR(Home);
