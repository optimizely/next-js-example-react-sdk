import { useDecision } from "@optimizely/react-sdk";
import DefaultProductsList from "../components/default_products_list";
import PopularProductsList from "../components/sorted_products_list";

const Home = () => {
  const [decision] = useDecision("product_sort");
  return (
    <div>
      <h2>Welcome to optimizely next.js </h2>
      {decision.variables.sort_method == "popular_first" ? (
        <PopularProductsList />
      ) : (
        <DefaultProductsList />
      )}
    </div>
  );
};

export default Home;
