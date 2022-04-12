import { useDecision } from "@optimizely/react-sdk";

import { getDatafile } from "../optimizely/datafile_provider";
import { WithOptimizely } from "../optimizely/with_optimizely";
import DefaultProductsList from "../components/default_products_list";
import SortedProductsList from "../components/sorted_products_list";

const Home = (props: any) => {
  const [decision] = useDecision("product_sort");
  return (
    <div>
      <h2>Welcome to optimizely next.js </h2>
      {decision.variables.sort_method == "alphabetical" ? (
        <SortedProductsList />
      ) : (
        <DefaultProductsList />
      )}
    </div>
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
export default WithOptimizely(Home);
